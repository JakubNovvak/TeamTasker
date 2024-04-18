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
        private readonly IMapper _mapper;

        public NotificationService(INotificationRepository notificationRepo,IMapper mapper)
        {
            _notificationRepo = notificationRepo;
            _mapper = mapper;
        }
        public void CreateNotification(CreateNotificationDto dto)
        {
            if (dto == null)
                throw new ArgumentNullException(nameof(dto));
            var notification = _mapper.Map<Notification>(dto);
            _notificationRepo.CreateNotification(notification);
        }
    }
}
