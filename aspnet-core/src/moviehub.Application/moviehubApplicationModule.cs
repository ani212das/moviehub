using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using moviehub.Authorization;

namespace moviehub
{
    [DependsOn(
        typeof(moviehubCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class moviehubApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<moviehubAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(moviehubApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
