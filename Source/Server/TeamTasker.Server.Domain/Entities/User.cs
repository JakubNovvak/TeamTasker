﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace TeamTasker.Server.Domain.Entities
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Position {  get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public virtual Role Role { get; set; } = default!;
        [ForeignKey("Role")]
        public int RoleId { get; set; }
        public string Avatar { get; set; } = string.Empty;
        public virtual ICollection<UserNotification> UserNotifications { get; set; } = default!;

    }
}
