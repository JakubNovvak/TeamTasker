using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Application.Dtos.Noitifcations;
using TeamTasker.Server.Application.Interfaces;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Application.Services
{
    public class NotificationService : INotificationService
    {
        private readonly INotificationRepository _notificationRepo;
        private readonly IEmployeeRepository _employeeRepo;
        private readonly IUserNotificationRepository _userNotificationRepo;
        private readonly IMapper _mapper;

        public NotificationService(INotificationRepository notificationRepo, IEmployeeRepository employeeRepo, IUserNotificationRepository userNotificationRepo, IMapper mapper)
        {
            _notificationRepo = notificationRepo;
            _employeeRepo = employeeRepo;
            _userNotificationRepo = userNotificationRepo;
            _mapper = mapper;
        }
        public void CreateNotification(CreateNotificationDto dto)
        {
            if (dto == null)
                throw new ArgumentNullException(nameof(dto));
            var notification = _mapper.Map<Notification>(dto);
            _notificationRepo.CreateNotification(notification);
        }
        public void AddNotificationToUser(AddNotificationToUserDto dto)
        {
            if (dto == null)
                throw new ArgumentNullException(nameof(dto));

            var notification = _notificationRepo.GetNotification(dto.NotificationId);

            if (notification == null)
                throw new Exception("Notification not found");

            var user = _employeeRepo.GetUser(dto.UserId);

            if (user == null)
                throw new Exception("User not found");

            var employeeNotification = _mapper.Map<UserNotification>(dto);

            _userNotificationRepo.AddUserNotification(employeeNotification);
        }
    }
}
