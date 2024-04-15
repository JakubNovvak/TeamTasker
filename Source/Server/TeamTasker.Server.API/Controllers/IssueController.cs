﻿using Microsoft.AspNetCore.Mvc;
using TeamTasker.Server.Application.Services;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IssueController : ControllerBase
    {
        private readonly IIssueService _issueService;

        public IssueController(IIssueService issueService)
        {
            _issueService = issueService;
        }
        [HttpGet]
        [Route("GetAllIssues", Name = "GetAllIssues")]
        public IActionResult GetAllIssue()
        {
            try
            {
                var issue = _issueService.GetAllIssues();
                return Ok(issue);
            }
            catch (KeyNotFoundException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> No projects were found - the table is empty!: {ex.Message}");
                return NotFound("There is no projects in the database.");
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Received null value - either list or DbSet{ex.Message}");
                return BadRequest($"The returned data seems to be invalid: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting projects : {ex.Message}");
            }
        }

        //TODO: Change this methods to 4 methods returning 4 types of status.
        /*[HttpGet]
        [Route("GetCompletedIssue", Name = "GetCompletedIssue")]
        public IActionResult GetCompletedIssue()
        {
            try
            {
                var issue = _issueService.GetCompletedIssue();
                return Ok(issue);
            }
            catch (KeyNotFoundException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> No projects were found - the table is empty!: {ex.Message}");
                return NotFound("There is no projects in the database.");
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Received null value - either list or DbSet{ex.Message}");
                return BadRequest($"The returned data seems to be invalid: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting projects : {ex.Message}");
            }
        }

        [HttpGet]
        [Route("GetNotCompletedIssue", Name = "GetNotCompletedIssue")]
        public IActionResult GetNotCompletedIssue()
        {
            try
            {
                var issue = _issueService.GetNotCompletedIssue();
                return Ok(issue);
            }
            catch (KeyNotFoundException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> No projects were found - the table is empty!: {ex.Message}");
                return NotFound("There is no projects in the database.");
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Received null value - either list or DbSet{ex.Message}");
                return BadRequest($"The returned data seems to be invalid: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting projects : {ex.Message}");
            }
        }*/

        [HttpGet]
        [Route("GetIssueAssignedToEmployee", Name = "GetIssueAssignedToEmployee")]
        public IActionResult GetIssueAssignedToEmployee(int id)
        {
            try
            {
                var issue = _issueService.GetIssueAssignedToEmployee(id);
                return Ok(issue);
            }
            catch (KeyNotFoundException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> No projects were found - the table is empty!: {ex.Message}");
                return NotFound("There is no projects in the database.");
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Received null value - either list or DbSet{ex.Message}");
                return BadRequest($"The returned data seems to be invalid: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting projects : {ex.Message}");
            }
        }

        [HttpGet]
        [Route("GetIssueByPriority", Name = "GetIssueByPriority")]
        public IActionResult GetIssueByPriority(IssuePriority priority)
        {
            try
            {
                var issue = _issueService.GetIssueByPriority(priority);
                return Ok(issue);
            }
            catch (KeyNotFoundException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> No projects were found - the table is empty!: {ex.Message}");
                return NotFound("There is no projects in the database.");
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Received null value - either list or DbSet{ex.Message}");
                return BadRequest($"The returned data seems to be invalid: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting projects : {ex.Message}");
            }
        }

        [HttpGet]
        [Route("GetAllIssuesFromProject", Name = "GetAllIssuesFromProject")]
        public IActionResult GetAllIssuesFromProject(int projectId)
        {
            try
            {
                var issues = _issueService.GetAllIssuesFromProject(projectId);
                return Ok(issues);
            }
            catch (KeyNotFoundException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> No projects were found - the table is empty!: {ex.Message}");
                return NotFound("There is no projects in the database.");
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Received null value - either list or DbSet{ex.Message}");
                return BadRequest($"The returned data seems to be invalid: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting projects : {ex.Message}");
            }
        }
    }
}
