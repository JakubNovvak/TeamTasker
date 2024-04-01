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
            CreateMap<CreateProjectDto, Project>();
            CreateMap<Project, CreateProjectDto>();
            CreateMap<CreateIssueDto, Issue>();
            CreateMap<Issue, ReadIssueDto>();
            CreateMap<AddIssueToProjectDto, Issue>();
            CreateMap<Issue, AddIssueToProjectDto>();
            CreateMap<GetIssueAssignedToEmployeeDto, Issue>();
            CreateMap<Issue, GetIssueAssignedToEmployeeDto>();
            CreateMap<GetIssueByPriorityDto, Issue>();
            CreateMap<Issue, GetIssueByPriorityDto>();



            CreateMap<Project, AddTeamToProjectDto>(); //1
            CreateMap<AddTeamToProjectDto, Project>(); //1

            CreateMap<Project, UpdateTeamToProjectDto>(); //1
            CreateMap<UpdateTeamToProjectDto, Project>(); //1

            CreateMap<Project, GetProjectNameAndImaginesDto>();
            CreateMap<GetProjectNameAndImaginesDto, Project>();

            CreateMap<AddMessageToProjectDto, Comment>();
            CreateMap<Comment, AddMessageToProjectDto>();

            CreateMap<Project, ReadProjectDto>()
                .ForMember(desc => desc.Comments, x => x.MapFrom(src => src.Comments));

            CreateMap<CreateTeamDto, Team>();
            CreateMap<Team, ReadTeamDto>();


            CreateMap<CreateEmployeeDto, Employee>();
            CreateMap<User, ReadUserDto>();
            CreateMap<Employee, ReadEmployeeDto>();
            CreateMap<Employee, ReadUserDto>();
        }
    }
}
