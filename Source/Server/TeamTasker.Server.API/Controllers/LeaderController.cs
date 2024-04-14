﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeamTasker.Server.Application.Authorization;
using TeamTasker.Server.Application.Dtos.EmployeeTeam;
using TeamTasker.Server.Application.Dtos.Issues;
using TeamTasker.Server.Application.Dtos.Projects;
using TeamTasker.Server.Application.Dtos.Teams;
using TeamTasker.Server.Application.Dtos.Users;
using TeamTasker.Server.Application.Interfaces;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LeaderController : ControllerBase
    {
        private readonly ILeaderService _leaderService;
        private readonly IIssueService _issueService;

        public LeaderController(ILeaderService leaderService, IIssueService issueService)
        {
            _leaderService = leaderService;
            _issueService = issueService;
        }
        [HttpPost]
        [Route("CreateIssue", Name = "CreateIssue")]
        public IActionResult CreateIssue(CreateIssueDto dto)
        {
            try
            {
                _issueService.CreateIssue(dto);
                return Ok();
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine($">[TasksCtr] <Create> There was no project provided: {ex.Message}");
                return BadRequest($"There was an unexpected error while getting projects : {ex.Message}");
            }
            catch (DbUpdateException ex)
            {
                Console.WriteLine($">[TasksCtr] <Create> There was a problem with adding the new project: {ex.Message}");
                return BadRequest($"There was a problem with adding the new project: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <Create> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting projects : {ex.Message}");
            }
        }

    }
}
