using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Application.Authorization;
using TeamTasker.Server.Application.Dtos.Users;
using TeamTasker.Server.Application.Interfaces.Authorization;
using TeamTasker.Server.Domain.Interfaces;
using TeamTasker.Server.Infrastructure.Services;

namespace TeamTasker.Server.Application.Services.Authorization
{
    public class JwtAuthorizationService : IJwtAuthorizationService
    {
        private readonly IEmployeeRepository _employeeRepo;
        private readonly IEmployeeService _employeeService;

        public JwtAuthorizationService(IEmployeeRepository employeeRepo, IEmployeeService employeeService)
        {
            _employeeRepo = employeeRepo;
            _employeeService = employeeService;
        }

        public void GetUserToken(LoginDto loginUserDto, HttpResponse httpResponse)
        {
            var userReadDto = _employeeService.GetUserByEmail(loginUserDto.Email) ?? throw new KeyNotFoundException();

           if(_employeeService.GetUserPassword(userReadDto.Id) != loginUserDto.Password)
                throw new KeyNotFoundException();

            var jwtToken = JwtHelperClass.GenerateToken(userReadDto);


            httpResponse.Cookies.Append("JwtToken", jwtToken, new CookieOptions 
            { 
                //HttpOnly = false,
                //Domain = ".127.0.0.1/",
                Path = "/",
                Expires = DateTimeOffset.Now.AddDays(7),
                IsEssential = true,
                MaxAge = TimeSpan.MaxValue,
                Secure = false
            });
        }

        public void CheckIfHasAdminPermission(string? stringifiedToken)
        {
            if (stringifiedToken == null)
                throw new UnauthorizedAccessException();

            var roleId = GetUserRoleFromToken(stringifiedToken);

            if (roleId != 1)
                throw new UnauthorizedAccessException();
        }

        public void CheckIfHasLoggedInUserPermission(string? stringifiedToken)
        {
            if (stringifiedToken == null)
                throw new UnauthorizedAccessException();

            var roleId = GetUserRoleFromToken(stringifiedToken);

            if(roleId != 2)
                throw new UnauthorizedAccessException();
        }

        public void CheckIfLeaderOfTheProject(string? stringifiedToken)
        {
            if (stringifiedToken == null)
                throw new UnauthorizedAccessException();

            var verifiedToken = VerifyPassedToken(stringifiedToken);
            
            if(verifiedToken.Issuer.ToString() != "leader@test.pl")
                throw new UnauthorizedAccessException();
        }

        public JwtSecurityToken VerifyPassedToken(string stringifiedToken)
        {
            var verifiedToken = JwtHelperClass.VerifyToken(stringifiedToken);

            return verifiedToken;
        }

        public int GetUserRoleFromToken(string stringifiedToken)
        {
            var verifiedToken = VerifyPassedToken(stringifiedToken);

            if(verifiedToken.Payload["roleId"]?.ToString() == null)
                throw new UnauthorizedAccessException();

            var roleId = int.Parse(verifiedToken.Payload["roleId"]?.ToString()!);

            return roleId;
        }
    }
}
