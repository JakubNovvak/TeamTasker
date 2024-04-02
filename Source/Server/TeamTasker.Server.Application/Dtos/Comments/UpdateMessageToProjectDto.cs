using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Domain.Entities;

namespace TeamTasker.Server.Application.Dtos.Comments
{
    public class UpdateMessageToProjectDto
    {
        public int? Id { get; set; }
        public string Content { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public int ProjectId { get; set; }
    }
}
