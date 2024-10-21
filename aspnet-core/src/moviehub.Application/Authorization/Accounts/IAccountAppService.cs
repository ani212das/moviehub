using System.Threading.Tasks;
using Abp.Application.Services;
using moviehub.Authorization.Accounts.Dto;

namespace moviehub.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
