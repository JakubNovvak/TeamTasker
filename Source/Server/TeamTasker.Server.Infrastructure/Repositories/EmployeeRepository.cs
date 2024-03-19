﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;
using TeamTasker.Server.Infrastructure.Presistence;

namespace TeamTasker.Server.Infrastructure.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly AppDbContext _appDbContext;
        public EmployeeRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public void CreateEmployee(Employee employee)
        {
            if (employee == null)
                throw new ArgumentNullException();

            _appDbContext.Add(employee);
            _appDbContext.SaveChanges();
        }

        public IEnumerable<Employee> GetAllEmployees()
        {
            var allDbEmployees = _appDbContext.Users.OfType<Employee>().ToList();

            return allDbEmployees;
        }

        public Employee GetEmployee(int id)
        {
            return _appDbContext.Users.OfType<Employee>().FirstOrDefault(employee => employee.Id == id);
        }
    }
}