﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Domain.Entities;

namespace TeamTasker.Server.Application.Dtos
{
    public class ReadCommentDto
    {
        public int Id { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public string Content { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public virtual ICollection<ReadUserDto> Users { get; set; } = default!;
        public string IssueName { get; set; } = string.Empty;
        public int IssueId { get; set; }
    }
}
