﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeamTasker.Server.Application.Dtos.Noitifcations
{
    public class AddNotificationToUserDto
    {
        public int NotificationId { get; set; }
        public int UserId { get; set; }
    }
}
