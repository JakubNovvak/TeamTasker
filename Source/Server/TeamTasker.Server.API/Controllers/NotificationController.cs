﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeamTasker.Server.Application.Authorization;
using TeamTasker.Server.Application.Dtos.Noitifcations;
using TeamTasker.Server.Application.Interfaces;
using TeamTasker.Server.Application.Interfaces.Authorization;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotificationController : ControllerBase
    {
        private readonly INotificationService _notificationService;

        public NotificationController(INotificationService notificationService)
        {
            _notificationService = notificationService;
        }
        [HttpPost]
        [Route("CreateNotification", Name = "CreateNotification")]
        public IActionResult CreateNotification(CreateNotificationDto dto)
        {
            try
            {
                _notificationService.CreateNotification(dto);
                return Ok();
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine($">[TasksCtr] <Create> There was no notification provided: {ex.Message}");
                return BadRequest($"There was an unexpected error while getting notifications : {ex.Message}");
            }
            catch (DbUpdateException ex)
            {
                Console.WriteLine($">[TasksCtr] <Create> There was a problem with adding the new notification: {ex.Message}");
                return BadRequest($"There was a problem with adding the new notification: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <Create> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting notifications : {ex.Message}");
            }
        }

    }
}
