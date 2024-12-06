using System;
using System.Collections.Generic;

namespace QuanLyRapChieuPhim.Models;

public partial class TaiKhoan
{
    public int IdTk { get; set; }

    public string? TenDangNhap { get; set; }

    public string? MatKhau { get; set; }

    public string? VaiTro { get; set; }

    public virtual ICollection<KhachHang> KhachHangs { get; set; } = new List<KhachHang>();

    public virtual ICollection<NhanVien> NhanViens { get; set; } = new List<NhanVien>();

    public virtual ICollection<QuanLy> QuanLies { get; set; } = new List<QuanLy>();
}
