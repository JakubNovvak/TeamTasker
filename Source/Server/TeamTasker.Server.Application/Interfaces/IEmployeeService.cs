﻿using TeamTasker.Server.Application.Dtos;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface IEmployeeService
    {
        void CreateEmployee(CreateUserDto userDto);
        IEnumerable<ReadEmployeeDto> GetAllEmployees();
        ReadEmployeeDto GetEmployee(int id);
    }
}
