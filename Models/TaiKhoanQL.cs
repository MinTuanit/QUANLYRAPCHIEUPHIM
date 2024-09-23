using System.Xml.Linq;

namespace QUANLYRAPCHIEUPHIM.Models
{
    public class TaiKhoanQL
    {
        private string idQL;
        private string tenDangNhap;
        private string matKhau;
        private string hoTen;
        private string ngaySinh;
        private string gioiTinh;
        private string dienThoai;
        private string diaChi;
        private string cccd;
        public TaiKhoanQL(string idQL, string tenDangNhap, string matKhau,string hoTen ,string ngaySinh,
            string gioiTinh, string dienThoai, string diaChi, string cccd)
        {          
            this.idQL = idQL;
            this.tenDangNhap = tenDangNhap;
            this.matKhau = matKhau;
            this.hoTen = hoTen;
            this.ngaySinh = ngaySinh;
            this.gioiTinh = gioiTinh;
            this.dienThoai = dienThoai;
            this.diaChi = diaChi;
            this.cccd = cccd;
        }

        public string IdQL   // property
        {
            get { return idQL; }   // get method
            set { idQL = value; }  // set method
        }

        public string TenDangNhap   // property
        {
            get { return tenDangNhap; }   // get method
            set { tenDangNhap = value; }  // set method
        }
        public string MatKhau   // property
        {
            get { return matKhau; }   // get method
            set { matKhau = value; }  // set method
        }
        public string HoTen   // property
        {
            get { return hoTen; }   // get method
            set { hoTen = value; }  // set method
        }
        public string NgaySinh    // property
        {
            get { return ngaySinh; }   // get method
            set { ngaySinh = value; }  // set method
        }
        public string GioiTinh    // property
        {
            get { return gioiTinh; }   // get method
            set { gioiTinh = value; }  // set method
        }
        public string DiaChi   // property
        {
            get { return diaChi; }   // get method
            set { diaChi = value; }  // set method
        }

        public string CCCD   // property
        {
            get { return cccd; }   // get method
            set { cccd = value; }  // set method
        }

    }
}
