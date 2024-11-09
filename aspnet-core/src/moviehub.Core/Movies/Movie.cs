using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moviehub.Movies
{
    public class Movie : Entity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Director { get; set; }
        public DateTime ReleaseDate { get; set; }
        public decimal Rating { get; set; }
        public string Genre { get; set; }
        public string PosterUrl { get; set; }
    }
}
