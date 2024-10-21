using System.Threading.Tasks;
using Abp.Application.Services;
using moviehub.Sessions.Dto;

namespace moviehub.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
