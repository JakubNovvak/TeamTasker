using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Application.Dtos.Comments;
using TeamTasker.Server.Application.Dtos.Issues;
using TeamTasker.Server.Application.Dtos.Projects;
using TeamTasker.Server.Application.Dtos.Teams;
using TeamTasker.Server.Application.Dtos.Users;
using TeamTasker.Server.Domain.Entities;

namespace TeamTasker.Server.Application.Profiles
{
    public class BaseProfile: Profile
    {
        public BaseProfile()
        {
            CreateMap<CreateCommentDto, Comment>();
            CreateMap<Comment, ReadCommentDto>();

            CreateMap<CreateIssueDto, Issue>();
            CreateMap<Issue, ReadIssueDto>();

            CreateMap<CreateProjectDto, Project>();
            CreateMap<Project, ReadProjectDto>();

            CreateMap<CreateTeamDto, Team>();
            CreateMap<Team, ReadTeamDto>();

            CreateMap <Leader, ReadLeaderDto>();

            CreateMap<CreateUserDto, User>();
            CreateMap<User, ReadUserDto>();
            CreateMap<Leader, ReadLeaderDto>();
            CreateMap<Employee, ReadEmployeeDto>();
        }
    }
}
