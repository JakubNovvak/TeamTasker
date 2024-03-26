using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
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

        [HttpPost("login/credentials", Name = "UserLogin")]
        public ActionResult LoginRequest(LoginDto loginUserDto)
        {
            try
            {
                _jwtService.GetUserToken(loginUserDto, Response);
            }
            catch (KeyNotFoundException)
            {
                return Unauthorized("The email address or password is incorrect.");
            }
            catch (ArgumentNullException)
            {
                return BadRequest("One of the passed values is null.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest($"There was an issue with encoding credentials data: {ex}");
            }
            catch (Exception ex) 
            {
                return BadRequest($"An unexcpeted error occrued: {ex.Message}");
            }

            return Ok("Login was successfull - the Token also has been created successfully.");
        }

        [HttpGet("login/tests/getroleid", Name = "TestGetRoleId")]
        public ActionResult<int> VerifyPermission()
        {
            var userIdRole = _jwtService.GetUserRoleFromToken(Request.Cookies["JwtToken"]!);

            return Ok($"User has roleId: {userIdRole}");
        }

        [HttpGet("authorize/loggedin", Name = "VerifyLoggedInUser")]
        public ActionResult VerifyLoggedInUserPermission()
        {
            try
            {
                _jwtService.CheckIfHasLoggedInUserPermission(Request.Cookies["JwtToken"]);
            }
            catch (UnauthorizedAccessException)
            {
                return Unauthorized("You don't have enough permissions, to access this page.");
            }
            catch (SecurityTokenExpiredException)
            {
                return Unauthorized("Your sessions has expired.");
            }
            catch (ArgumentNullException)
            {
                return Unauthorized("There was no identity token provided.");
            }
            catch (Exception ex)
            {
                return BadRequest($"An unexpected error has occured: {ex.Message}");
            }

            return Ok("User is allowed to use this resource.");
        }

        [HttpGet("authorize/admin", Name = "VerifyAdminUser")]
        public ActionResult VerifyAdminPermission()
        {
            try
            {
                _jwtService.CheckIfHasAdminPermission(Request.Cookies["JwtToken"]);
            }
            catch (UnauthorizedAccessException)
            {
                return Unauthorized("You don't have enough permissions, to access this admin page.");
            }
            catch (SecurityTokenExpiredException)
            {
                return Unauthorized("Your sessions has expired.");
            }
            catch (ArgumentNullException)
            {
                return Unauthorized("There was no identity token provided.");
            }
            catch (Exception ex)
            {
                return BadRequest($"An unexpected error has occured: {ex.Message}");
            }

            return Ok("User is allowed to use this admin resource.");
        }

        [HttpGet("authorize/leader", Name = "VerifyProjectLeader")]
        public ActionResult VerifyProjectLeader(/*int Project Id*/)
        {
            try
            {
                _jwtService.CheckIfLeaderOfTheProject(Request.Cookies["JwtToken"]);
            }
            catch (UnauthorizedAccessException)
            {
                return Unauthorized("You don't have enough permissions, to access leader reasource.");
            }
            catch (SecurityTokenExpiredException)
            {
                return Unauthorized("Your sessions has expired.");
            }
            catch (ArgumentNullException)
            {
                return Unauthorized("There was no identity token provided.");
            }
            catch (Exception ex)
            {
                return BadRequest($"An unexpected error has occured: {ex.Message}");
            }

            return Ok("User is allowed to use this leader resource.");
        }
    }
}
