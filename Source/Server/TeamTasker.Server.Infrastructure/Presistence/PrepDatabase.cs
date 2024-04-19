﻿using System;
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
                if (!_appDbContext.Teams.Any())
                {
                    var teams = GetTeams();
                    _appDbContext.Teams.AddRange(teams);
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
                if (!_appDbContext.Notifications.Any())
                {
                    var notifications = GetNotifications();
                    _appDbContext.Notifications.AddRange(notifications);
                    _appDbContext.SaveChanges();
                }
            }
            /*if (_appDbContext.Database.CanConnect())
            {
                if (!_appDbContext.Issues.Any())
                {
                    var issues = GetIssues();
                    _appDbContext.Issues.AddRange(issues);
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
                new User(){ FirstName = "Admin", Email="admin", Password="admin", Avatar = "https://t4.ftcdn.net/jpg/02/88/57/41/360_F_288574163_CnFR8zc2sPzwh24PnyODUmGdfA9jP9ZS.jpg"},

                new Employee(){FirstName = "Regular", LastName="User", 
                    Position="Software Developer", Email="user@test.pl", Password ="password", Avatar = "https://mui.com/static/images/avatar/1.jpg" },

                new Employee(){FirstName = "Leader", LastName="User", 
                    Position="Project Admin", Email="leader@test.pl", Password ="password", Avatar= "https://mui.com/static/images/avatar/2.jpg"},

                new Employee(){FirstName = "Employee", LastName = "No. 1", 
                    Position="Testing", Email="employee1@test.pl", Password ="password", Avatar = ""},

                new Employee(){FirstName = "Employee", LastName = "No. 2", 
                    Position="Testing", Email="employee2@test.pl", Password ="password"},

                new Employee(){FirstName = "Employee", LastName = "No. 3", 
                    Position="Testing", Email="employee3@test.pl", Password ="password"},

                new Employee(){FirstName = "Employee", LastName = "No. 4", 
                    Position="Testing", Email="employee4@test.pl", Password ="password"},
                
                new Employee(){FirstName = "Employee", LastName = "No. 5",
                    Position="Testing", Email="employee5@test.pl", Password ="password"},
                
                new Employee(){FirstName = "Employee", LastName = "No. 6",
                    Position="Testing", Email="employee6@test.pl", Password ="password"}
            };
            return users;
        }
        private IEnumerable<Team> GetTeams()
        {
            //var selectedUsers = _appDbContext.Users.Where(u => u.FirstName == "Employee2" || u.FirstName == "Employee3" || u.FirstName == "Employee4").Select(u => (Employee)u).ToList();

            var teams = new List<Team>()
            {
                //new Team(){ Name = "team1", LeaderId=2, Employees = selectedUsers},
                //new Team(){ Name = "team2", LeaderId=2, Employees = selectedUsers}
                new Team(){ Name = "Team 1"}
            };
            return teams;
        }
        private IEnumerable<Project> GetProjects()
        {
            var projects = new List<Project>()
            {
                new Project(){ Name="Project 1", Description = "This is an example project.", TeamId=1},
                new Project(){ Name="Project 2"}
            };
            return projects;
        }
        private IEnumerable<Notification> GetNotifications()
        {
            var notifications = new List<Notification>()
            {
                new Notification() {Content="You have been assigned a new issue"},
                new Notification() {Content="You have been assigned to a new team"}
            };
            return notifications;
        }
        /* private IEnumerable<Issue> GetIssues()
         {
             var team = _appDbContext.Teams.FirstOrDefault(t => t.Id == 1);
             //var employeesInTeam = _appDbContext.Users.Where(user => team.Employees.Any(employee => employee.Id == user.Id)).ToList();
             var employeeIdsInTeam = team.Employees.Select(employee => employee.Id).ToList();
             var employeesInTeam = _appDbContext.Users.Where(user => employeeIdsInTeam.Contains(user.Id)).ToList();


            var employee = employeesInTeam[0];
            var employee1 = employeesInTeam[1];
            var employee2 = employeesInTeam[2];
            var issues = new List<Issue>()
            {
                new Issue(){ Name="issue1", ProjectId=1, EmployeeId=employee.Id,IsComplete = true},
                new Issue(){ Name="issue2", ProjectId=1, EmployeeId=employee1.Id,IsComplete = true},
                new Issue(){ Name="issue3", ProjectId=1, EmployeeId=employee2.Id}
            };
            return issues;
        }
             var employee = employeesInTeam[0];
             var employee1 = employeesInTeam[1];
             var employee2 = employeesInTeam[2];
             var issues = new List<Issue>()
             {
                 new Issue(){ Name="issue1", ProjectId=1, EmployeeId=employee.Id},
                 new Issue(){ Name="issue2", ProjectId=1, EmployeeId=employee1.Id},
                 new Issue(){ Name="issue3", ProjectId=1, EmployeeId=employee2.Id}
             };
             return issues;
         }*/
    }
}
