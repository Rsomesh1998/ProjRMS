using DeliciousRestAPI.Dal;
using DeliciousRestAPI.DAL;
using Microsoft.EntityFrameworkCore;

namespace DeliciousRestAPI.Context
{
    public class DBContext : DbContext
    {
        public DBContext()
        {
        }

        public DBContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<UserRegDal> UserRegDal { get; set; }

        public DbSet<ErrorLogDal> ErrorLogDal { get; set; }

        public DbSet<AdminLoginDal> AdminLoginDal { get; set; }

        public DbSet<SupplierDal> SupplierDal { get; set; }

        public DbSet<ProductDal> ProductDal { get; set; }

        public DbSet<OrdersDal> OrdersDal { get; set; }

        public DbSet<OrderDetailsDal> OrderDetailsDal { get; set; }

        public DbSet<MenuDal> MenuDal { get; set; }
        public DbSet<BookingDal> BookingDal { get; set; }

        public DbSet<UserOrdersDal> UserOrdersDal { get; set; }
        public DbSet<UserOrderDetailsDal> UserOrderDetailsDal { get; set; }
    }
}
