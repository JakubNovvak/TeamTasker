using Microsoft.AspNetCore.Mvc;
using TeamTasker.Server.Application.Dtos.Users;
using TeamTasker.Server.Application.Interfaces.Authorization;
using TeamTasker.Server.Domain.Interfaces;
using TeamTasker.Server.Infrastructure.Services;

namespace TeamTasker.Server.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly IEmployeeService _employeeService;
        private readonly IJwtAuthorizationService _jwtService;

        public AccountController(IEmployeeService employeeService, IJwtAuthorizationService jwtService)
        {
            _employeeService = employeeService;
            _jwtService = jwtService;
        }

        [HttpPost]
        public ActionResult LoginRequest(LoginDto loginUserDto)
        {
            //TODO: Call the authorization service

            return Ok();
        }
    }
}
