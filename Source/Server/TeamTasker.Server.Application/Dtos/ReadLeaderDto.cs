﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Domain.Entities;

namespace TeamTasker.Server.Application.Dtos
{
    public class ReadLeaderDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public ICollection<ReadCommentDto> Notifications { get; set; } = default!;
        public ICollection<ReadIssueDto> ReportedIssues { get; set; } = default!;
        public string TeamName { get; set; } = string.Empty;
    }
}
