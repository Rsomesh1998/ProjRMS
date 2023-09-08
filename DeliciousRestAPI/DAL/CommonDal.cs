using DeliciousRestAPI.Context;
using DeliciousRestAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DeliciousRestAPI.DAL
{
   
    public class CommonDal : DBContext
    {

        private readonly DBContext _context;

        public CommonDal(DBContext context)
        {
            _context = context;
        }
        public void ErrorLog(string controllerName,string methodName, string errorMsg)
        {
            ErrorLogDal objError = new ErrorLogDal();

            objError.Controller_Name = controllerName;
            objError.Error_Msg = errorMsg;
            objError.DateTime = DateTime.Now.ToString();
            objError.MethodName = methodName;
            _context.ErrorLogDal.Add(objError);
            _context.SaveChanges();

        }

    }
}
