using Abp.Application.Services;
using moviehub.MultiTenancy.Dto;

namespace moviehub.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

