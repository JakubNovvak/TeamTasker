using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeamTasker.Server.Application.Dtos.Projects
{
    public class GetProjectNameAndImaginesDto
    {
        public int ProjectId { get; set; }
        public string Name { get; set; }
        public IDictionary<int, string> Imagines { get; set; }
    }
}
