using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Domain.Entities;

namespace TeamTasker.Server.Infrastructure.Presistence
{
    public class PrepDatabase
    {
        private readonly AppDbContext _appDbContext;

        public PrepDatabase(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public void Seed()
        {
            if (_appDbContext.Database.CanConnect())
            {
                if (!_appDbContext.Roles.Any())
                {
                    var roles = GetRoles();
                    _appDbContext.Roles.AddRange(roles);
                    _appDbContext.SaveChanges();
                }
            }
            if (_appDbContext.Database.CanConnect())
            {
                if (!_appDbContext.Users.Any())
                {
                    var users = GetUsers();
                    _appDbContext.Users.AddRange(users);
                    _appDbContext.SaveChanges();
                }
            }
            if (_appDbContext.Database.CanConnect())
            {
                if (!_appDbContext.Projects.Any())
                {
                    var projects = GetProjects();
                    _appDbContext.Projects.AddRange(projects);
                    _appDbContext.SaveChanges();
                }
            }
            if (_appDbContext.Database.CanConnect())
            {
                if (!_appDbContext.Teams.Any())
                {
                    var teams = GetTeams();
                    _appDbContext.Teams.AddRange(teams);
                    _appDbContext.SaveChanges();
                }
            }

            if (_appDbContext.Database.CanConnect())
            {
                if (!_appDbContext.Issues.Any())
                {
                    var issues = GetIssues();
                    _appDbContext.Issues.AddRange(issues);
                    _appDbContext.SaveChanges();
                }
            }
            /*if (_appDbContext.Database.CanConnect())
            {
                if (!_appDbContext.Comments.Any())
                {
                    var notifications = GetNotifications();
                    _appDbContext.Comments.AddRange(notifications);
                    _appDbContext.SaveChanges();
                }
            }*/
        }
        private IEnumerable<Role> GetRoles()
        {
            var roles = new List<Role>()
            {
                new Role(){ Name = "Admin"},
                new Role(){ Name = "Employee"}
            };
            return roles;
        }
        private IEnumerable<User> GetUsers()
        {
            var users = new List<User>()
            {
                new User(){ FirstName = "Admin"},
                new Employee(){FirstName = "Employee1"},
                new Employee(){FirstName = "Employee2"},
                new Employee(){FirstName = "Employee3"},
                new Employee(){FirstName = "Employee4"},
                new Employee(){FirstName = "Employee5"},
                new Employee(){FirstName = "Employee6"},
            };
            return users;
        }
        private IEnumerable<Team> GetTeams()
        {
            var selectedUsers = _appDbContext.Users.Where(u => u.FirstName == "Employee2" || u.FirstName == "Employee3" || u.FirstName == "Employee4").Select(u => (Employee)u).ToList();

            var teams = new List<Team>()
            {
                new Team(){ Name = "team1", LeaderId=2, Employees = selectedUsers, ProjectId=1},
                new Team(){ Name = "team2", LeaderId=2, Employees = selectedUsers, ProjectId=2}
            };
            return teams;
        }
        private IEnumerable<Project> GetProjects()
        {
            var projects = new List<Project>()
            {
                new Project(){ Name="projekt1"},
                new Project(){ Name="projekt2"}
            };
            return projects;
        }
        private IEnumerable<Issue> GetIssues()
        {
            /* var team = _appDbContext.Teams.FirstOrDefault(t=>t.Id==1);
             //var employeesInTeam = _appDbContext.Users.Where(user => team.Employees.Any(employee => employee.Id == user.Id)).ToList();
             var employeeIdsInTeam = team.Employees.Select(employee => employee.Id).ToList();
             var employeesInTeam = _appDbContext.Users.Where(user => employeeIdsInTeam.Contains(user.Id)).ToList();

             var employee = employeesInTeam[0];
             var employee1 = employeesInTeam[1];
             var employee2 = employeesInTeam[2];*/
            var issues = new List<Issue>()
            {
                new Issue(){ Name="issue1", ProjectId=1, EmployeeId=2},
                new Issue(){ Name="issue2", ProjectId=1, EmployeeId=3},
                new Issue(){ Name="issue3", ProjectId=1, EmployeeId=4},
                new Issue(){ Name="issue3", ProjectId=1, EmployeeId=6}
            };
            return issues;
        }
        /*private IEnumerable<Comment> GetNotifications()
        {
            var notificationUsers = _appDbContext.Users.Where(u => u.FirstName == "Employee5" || u.FirstName == "Employee4" || u.FirstName == "Employee1").ToList();

            var comments = new List<Comment>()
            {
                new Comment(){Content="AAAA", Users = notificationUsers}
            };
            return comments;
        }*/
    }
}
