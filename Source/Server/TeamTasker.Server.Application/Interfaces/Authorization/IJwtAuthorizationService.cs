using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Application.Dtos.Users;

namespace TeamTasker.Server.Application.Interfaces.Authorization
{
    public interface IJwtAuthorizationService
    {
        public void GetUserToken(LoginDto loginUserDto, HttpResponse httpResponse);
        public JwtSecurityToken VerifyPassedToken(string stringifiedToken);
        public void CheckIfHasAdminPermission(string? stringifiedToken);
        public void CheckIfHasLoggedInUserPermission(string? stringifiedToken);
        public void CheckIfLeaderOfTheProject(string? stringifiedToken);
        public int GetUserRoleFromToken(string stringifiedToken);
        public string TrimHeaderToken(string? authorizationHeader);
    }
}
