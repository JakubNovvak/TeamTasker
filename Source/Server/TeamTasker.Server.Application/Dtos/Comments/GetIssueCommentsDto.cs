using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Application.Dtos.Users;

namespace TeamTasker.Server.Application.Dtos.Comments
{
    public class GetIssueCommentsDto
    {
        public virtual ICollection<ReadCommentDto> Comments { get; set; }
    }
}
