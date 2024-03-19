using Microsoft.EntityFrameworkCore;
using TeamTasker.Server.Domain.Interfaces;
using TeamTasker.Server.Infrastructure.Presistence;
using TeamTasker.Server.Infrastructure.Repositories;

var builder = WebApplication.CreateBuilder(args);

#region Services Configuration

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
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
builder.Services.AddScoped<ILeaderRepository, LeaderRepository>();
builder.Services.AddScoped<IProjectRepository, ProjectRepository>();
builder.Services.AddScoped<ITeamRepository, TeamRepository>();
#endregion

var app = builder.Build();

#region Application Configuration

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

#endregion