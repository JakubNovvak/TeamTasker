using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeamTasker.Server.Application.Dtos.Issues
{
    public class GetCompletedIssueDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
    }
}
