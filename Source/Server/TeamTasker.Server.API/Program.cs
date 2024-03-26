using Microsoft.EntityFrameworkCore;
using TeamTasker.Server.Application.Interfaces;
using TeamTasker.Server.Domain.Interfaces;
using TeamTasker.Server.Infrastructure.Presistence;
using TeamTasker.Server.Infrastructure.Repositories;
using TeamTasker.Server.Infrastructure.Services;

var builder = WebApplication.CreateBuilder(args);

#region Services Configuration

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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

//Example Service initialization
//builder.Services.AddScoped<IExampleService, ExampleService>();
builder.Services.AddScoped<IEmployeeService, EmployeeService>();
builder.Services.AddScoped<IProjectService, ProjectService>();

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

app.UseAuthorization();

app.MapControllers();

app.Run();

#endregion