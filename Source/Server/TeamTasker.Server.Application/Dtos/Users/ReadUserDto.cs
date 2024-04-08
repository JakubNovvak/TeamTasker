using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Application.Dtos.Comments;
using TeamTasker.Server.Domain.Entities;

namespace TeamTasker.Server.Application.Dtos.Users
{
    public class ReadUserDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Position { get; set; } = string.Empty;
        public int RoleId { get; set; }
        public string Avatar { get; set; } = string.Empty;
        public bool isTeamLeader { get; set; }

        //public virtual ICollection<ReadCommentDto> Notifications { get; set; } = default!;
    }
}
