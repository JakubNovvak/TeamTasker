using Microsoft.EntityFrameworkCore;
using TeamTasker.Server.Application.Interfaces;
using TeamTasker.Server.Application.Interfaces.Authorization;
using TeamTasker.Server.Application.Services.Authorization;
using TeamTasker.Server.Domain.Interfaces;
using TeamTasker.Server.Infrastructure.Presistence;
using TeamTasker.Server.Infrastructure.Repositories;
using TeamTasker.Server.Application.Services;
using FluentValidation;
using TeamTasker.Server.Application.Dtos.Users;
using TeamTasker.Server.Application.Dtos.Validators;
using FluentValidation.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

#region Services Configuration

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddFluentValidationAutoValidation().AddFluentValidationClientsideAdapters();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin",
        builder => builder.WithOrigins(["http://localhost:5173/", "http://192.168.0.112:5173/"])
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials()
        );
});

//TODO: Change database implementation to the SQL Server, instead of In Memory Database

if (builder.Environment.IsProduction())
{
    //TODO: SQL Server implementation
}
else
{
    Console.WriteLine($">[DBInit] {builder.Environment.EnvironmentName} Mode - initializing In Memory Database...");

    builder.Services.AddDbContext<AppDbContext>(options =>
        options.UseInMemoryDatabase("In Memory database")
    );
}

//Adds repositories to the Dependency Injection Container
builder.Services.AddScoped<ICommentRepository, CommentRepository>();
builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();
builder.Services.AddScoped<IIssueRepository, IssueRepository>();
builder.Services.AddScoped<IProjectRepository, ProjectRepository>();
builder.Services.AddScoped<ITeamRepository, TeamRepository>();
builder.Services.AddScoped<IEmployeeTeamRepository, EmployeeTeamRepository>();

//Example Service initialization
//builder.Services.AddScoped<IExampleService, ExampleService>();
builder.Services.AddScoped<IEmployeeService, EmployeeService>();
builder.Services.AddScoped<IProjectService, ProjectService>();
builder.Services.AddScoped<ITeamService, TeamService>();

builder.Services.AddScoped<IValidator<CreateEmployeeDto>, CreateEmployeeDtoValidator>();

builder.Services.AddScoped<IJwtAuthorizationService, JwtAuthorizationService>();
#endregion

var app = builder.Build();

#region Application Configuration

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    var prepDatabase = new PrepDatabase(dbContext);
    prepDatabase.Seed();
}

app.UseHttpsRedirection();

app.UseCors("AllowOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();

#endregion