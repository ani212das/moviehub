FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src
COPY ["src/moviehub.Web.Host/moviehub.Web.Host.csproj", "src/moviehub.Web.Host/"]
COPY ["src/moviehub.Web.Core/moviehub.Web.Core.csproj", "src/moviehub.Web.Core/"]
COPY ["src/moviehub.Application/moviehub.Application.csproj", "src/moviehub.Application/"]
COPY ["src/moviehub.Core/moviehub.Core.csproj", "src/moviehub.Core/"]
COPY ["src/moviehub.EntityFrameworkCore/moviehub.EntityFrameworkCore.csproj", "src/moviehub.EntityFrameworkCore/"]
WORKDIR "/src/src/moviehub.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/moviehub.Web.Host", "src/moviehub.Web.Host"]
COPY ["src/moviehub.Web.Core", "src/moviehub.Web.Core"]
COPY ["src/moviehub.Application", "src/moviehub.Application"]
COPY ["src/moviehub.Core", "src/moviehub.Core"]
COPY ["src/moviehub.EntityFrameworkCore", "src/moviehub.EntityFrameworkCore"]
WORKDIR "/src/src/moviehub.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:8.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "moviehub.Web.Host.dll"]
