using Microsoft.AspNetCore.Mvc;
using TeamTasker.Server.Application.Dtos.Users;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public UserController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }
        [HttpGet("email")]
        public IActionResult GetUserByEmail(string email)
        {
            var user = _employeeService.GetUserByEmail(email);
            return Ok(user);
        }

        [HttpGet("password")]
        public IActionResult GetUserPasword(int id)
        {
            var password = _employeeService.GetUserPassword(id);
            return Ok(password);
        }
    }
}
