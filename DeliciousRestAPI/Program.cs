using DeliciousRestAPI.Context;
using Microsoft.EntityFrameworkCore;

namespace DeliciousRestAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddCors();
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<DBContext>(options => options.UseSqlServer("Data Source=.;Initial Catalog=DeliciousRestDB;Integrated Security=True;TrustServerCertificate=true"));
            //builder.Services.AddDbContext<DBContext>(options => options.UseSqlServer("Data Source=SQL5111.site4now.net,1433;Initial Catalog=db_a9e551_delicious;User Id=db_a9e551_delicious_admin;Password=Rahul@789;TrustServerCertificate=true"));

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();
            app.UseCors(builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            });

            app.MapControllers();

            app.Run();
        }
    }
}