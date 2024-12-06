using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace QuanLyRapChieuPhim.Models;

public partial class QuanLyRapChieuPhimContext : DbContext
{
    public QuanLyRapChieuPhimContext()
    {
    }

    public QuanLyRapChieuPhimContext(DbContextOptions<QuanLyRapChieuPhimContext> options): base(options)
    {
    }

    public virtual DbSet<Cthd> Cthds { get; set; }

    public virtual DbSet<Cttp> Cttps { get; set; }

    public virtual DbSet<Ghe> Ghes { get; set; }

    public virtual DbSet<HoaDon> HoaDons { get; set; }

    public virtual DbSet<KhachHang> KhachHangs { get; set; }

    public virtual DbSet<LichChieuPhim> LichChieuPhims { get; set; }

    public virtual DbSet<NhanVien> NhanViens { get; set; }

    public virtual DbSet<Phim> Phims { get; set; }

    public virtual DbSet<Phong> Phongs { get; set; }

    public virtual DbSet<QuanLy> QuanLies { get; set; }

    public virtual DbSet<TaiKhoan> TaiKhoans { get; set; }

    public virtual DbSet<Topping> Toppings { get; set; }


    // thay đổi Server, Database để chạy trên máy
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=QuanLyRapChieuPhim;Trusted_Connection=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cthd>(entity =>
        {
            entity.HasKey(e => new { e.IdGhe, e.IdLichChieuPhim, e.IdHoaDon });

            entity.ToTable("CTHD");

            entity.Property(e => e.IdGhe).HasColumnName("idGhe");
            entity.Property(e => e.IdLichChieuPhim).HasColumnName("idLichChieuPhim");
            entity.Property(e => e.IdHoaDon).HasColumnName("idHoaDon");

            entity.HasOne(d => d.IdGheNavigation).WithMany(p => p.Cthds)
                .HasForeignKey(d => d.IdGhe)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CTHD_Ghe");

            entity.HasOne(d => d.IdHoaDonNavigation).WithMany(p => p.Cthds)
                .HasForeignKey(d => d.IdHoaDon)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CTHD_HoaDon");

            entity.HasOne(d => d.IdLichChieuPhimNavigation).WithMany(p => p.Cthds)
                .HasForeignKey(d => d.IdLichChieuPhim)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CTHD_LichChieuPhim");
        });

        modelBuilder.Entity<Cttp>(entity =>
        {
            entity.HasKey(e => new { e.IdHoaDon, e.IdTp });

            entity.ToTable("CTTP");

            entity.Property(e => e.IdHoaDon).HasColumnName("idHoaDon");
            entity.Property(e => e.IdTp).HasColumnName("idTP");
            entity.Property(e => e.SoLuong).HasColumnName("soLuong");

            entity.HasOne(d => d.IdHoaDonNavigation).WithMany(p => p.Cttps)
                .HasForeignKey(d => d.IdHoaDon)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CTTP_HoaDon");

            entity.HasOne(d => d.IdTpNavigation).WithMany(p => p.Cttps)
                .HasForeignKey(d => d.IdTp)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CTTP_Topping");
        });

        modelBuilder.Entity<Ghe>(entity =>
        {
            entity.HasKey(e => e.IdGhe);

            entity.ToTable("Ghe");

            entity.Property(e => e.IdGhe).HasColumnName("idGhe");
            entity.Property(e => e.IdPhong).HasColumnName("idPhong");
            entity.Property(e => e.TenGhe)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("tenGhe");

            entity.HasOne(d => d.IdPhongNavigation).WithMany(p => p.Ghes)
                .HasForeignKey(d => d.IdPhong)
                .HasConstraintName("FK_Ghe_Phong");
        });

        modelBuilder.Entity<HoaDon>(entity =>
        {
            entity.HasKey(e => e.IdHoaDon);

            entity.ToTable("HoaDon");

            entity.Property(e => e.IdHoaDon).HasColumnName("idHoaDon");
            entity.Property(e => e.IdKh).HasColumnName("idKH");
            entity.Property(e => e.NgayDat).HasColumnName("ngayDat");
            entity.Property(e => e.TongTien).HasColumnName("tongTien");

            entity.HasOne(d => d.IdKhNavigation).WithMany(p => p.HoaDons)
                .HasForeignKey(d => d.IdKh)
                .HasConstraintName("FK_HoaDon_KhachHang");
        });

        modelBuilder.Entity<KhachHang>(entity =>
        {
            entity.HasKey(e => e.IdKh);

            entity.ToTable("KhachHang");

            entity.Property(e => e.IdKh).HasColumnName("idKH");
            entity.Property(e => e.GioiTinh)
                .HasMaxLength(10)
                .HasColumnName("gioiTinh");
            entity.Property(e => e.IdTk).HasColumnName("idTK");
            entity.Property(e => e.NgaySinh).HasColumnName("ngaySinh");
            entity.Property(e => e.SoDienThoai)
                .HasColumnType("ntext")
                .HasColumnName("soDienThoai");
            entity.Property(e => e.TenKh)
                .HasMaxLength(50)
                .HasColumnName("tenKH");

            entity.HasOne(d => d.IdTkNavigation).WithMany(p => p.KhachHangs)
                .HasForeignKey(d => d.IdTk)
                .HasConstraintName("FK_KhachHang_TaiKhoan");
        });

        modelBuilder.Entity<LichChieuPhim>(entity =>
        {
            entity.HasKey(e => e.IdLichChieuPhim);

            entity.ToTable("LichChieuPhim");

            entity.Property(e => e.IdLichChieuPhim).HasColumnName("idLichChieuPhim");
            entity.Property(e => e.GiaVe).HasColumnName("giaVe");
            entity.Property(e => e.GioBatDau).HasColumnName("gioBatDau");
            entity.Property(e => e.IdPhim).HasColumnName("idPhim");
            entity.Property(e => e.IdPhong).HasColumnName("idPhong");
            entity.Property(e => e.NgayChieu).HasColumnName("ngayChieu");

            entity.HasOne(d => d.IdPhimNavigation).WithMany(p => p.LichChieuPhims)
                .HasForeignKey(d => d.IdPhim)
                .HasConstraintName("FK_LichChieuPhim_Phim");

            entity.HasOne(d => d.IdPhongNavigation).WithMany(p => p.LichChieuPhims)
                .HasForeignKey(d => d.IdPhong)
                .HasConstraintName("FK_LichChieuPhim_Phong");
        });

        modelBuilder.Entity<NhanVien>(entity =>
        {
            entity.HasKey(e => e.IdNv);

            entity.ToTable("NhanVien");

            entity.Property(e => e.IdNv).HasColumnName("idNV");
            entity.Property(e => e.Cccd)
                .HasMaxLength(12)
                .IsFixedLength()
                .HasColumnName("CCCD");
            entity.Property(e => e.DiaChi)
                .HasColumnType("text")
                .HasColumnName("diaChi");
            entity.Property(e => e.DienThoai)
                .HasColumnType("text")
                .HasColumnName("dienThoai");
            entity.Property(e => e.GioiTinh)
                .HasMaxLength(10)
                .HasColumnName("gioiTinh");
            entity.Property(e => e.HoTen)
                .HasMaxLength(50)
                .HasColumnName("hoTen");
            entity.Property(e => e.IdQl).HasColumnName("idQL");
            entity.Property(e => e.IdTk).HasColumnName("idTK");
            entity.Property(e => e.NgaySinh).HasColumnName("ngaySinh");

            entity.HasOne(d => d.IdTkNavigation).WithMany(p => p.NhanViens)
                .HasForeignKey(d => d.IdTk)
                .HasConstraintName("FK_NhanVien_TaiKhoan");
        });

        modelBuilder.Entity<Phim>(entity =>
        {
            entity.HasKey(e => e.IdPhim).HasName("PK_Phim1");

            entity.ToTable("Phim");

            entity.Property(e => e.IdPhim).HasColumnName("idPhim");
            entity.Property(e => e.HinhAnh)
                .HasColumnType("text")
                .HasColumnName("hinhAnh");
            entity.Property(e => e.MoTa)
                .HasColumnType("text")
                .HasColumnName("moTa");
            entity.Property(e => e.NamSx).HasColumnName("namSX");
            entity.Property(e => e.NhaSanXuat)
                .HasMaxLength(50)
                .HasColumnName("nhaSanXuat");
            entity.Property(e => e.NuocSx)
                .HasMaxLength(50)
                .HasColumnName("nuocSX");
            entity.Property(e => e.TenPhim)
                .HasMaxLength(50)
                .HasColumnName("tenPhim");
            entity.Property(e => e.TheLoai)
                .HasMaxLength(50)
                .HasColumnName("theLoai");
            entity.Property(e => e.ThoiLuong)
                .HasColumnType("text")
                .HasColumnName("thoiLuong");
            entity.Property(e => e.Url)
                .HasColumnType("text")
                .HasColumnName("url");
        });

        modelBuilder.Entity<Phong>(entity =>
        {
            entity.HasKey(e => e.IdPhong).HasName("PK_PHIM");

            entity.ToTable("Phong");

            entity.Property(e => e.IdPhong).HasColumnName("idPhong");
            entity.Property(e => e.SoGheToiDa).HasColumnName("soGheToiDa");
            entity.Property(e => e.TenPhong)
                .HasMaxLength(50)
                .HasColumnName("tenPhong");
        });

        modelBuilder.Entity<QuanLy>(entity =>
        {
            entity.HasKey(e => e.IdQl);

            entity.ToTable("QuanLy");

            entity.Property(e => e.IdQl).HasColumnName("idQL");
            entity.Property(e => e.Cccd)
                .HasMaxLength(12)
                .IsFixedLength()
                .HasColumnName("CCCD");
            entity.Property(e => e.DiaChi)
                .HasColumnType("text")
                .HasColumnName("diaChi");
            entity.Property(e => e.DienThoai)
                .HasColumnType("text")
                .HasColumnName("dienThoai");
            entity.Property(e => e.GioiTinh)
                .HasMaxLength(10)
                .HasColumnName("gioiTinh");
            entity.Property(e => e.HoTen)
                .HasMaxLength(50)
                .HasColumnName("hoTen");
            entity.Property(e => e.IdTk).HasColumnName("idTK");
            entity.Property(e => e.NgaySinh).HasColumnName("ngaySinh");

            entity.HasOne(d => d.IdTkNavigation).WithMany(p => p.QuanLies)
                .HasForeignKey(d => d.IdTk)
                .HasConstraintName("FK_QuanLy_TaiKhoan");
        });

        modelBuilder.Entity<TaiKhoan>(entity =>
        {
            entity.HasKey(e => e.IdTk);

            entity.ToTable("TaiKhoan");

            entity.Property(e => e.IdTk).HasColumnName("idTK");
            entity.Property(e => e.MatKhau)
                .HasMaxLength(50)
                .HasColumnName("matKhau");
            entity.Property(e => e.TenDangNhap)
                .HasMaxLength(50)
                .HasColumnName("tenDangNhap");
            entity.Property(e => e.VaiTro)
                .HasMaxLength(15)
                .HasColumnName("vaiTro");
        });

        modelBuilder.Entity<Topping>(entity =>
        {
            entity.HasKey(e => e.IdTp);

            entity.ToTable("Topping");

            entity.Property(e => e.IdTp).HasColumnName("idTP");
            entity.Property(e => e.Gia).HasColumnName("gia");
            entity.Property(e => e.TenTp)
                .HasMaxLength(50)
                .HasColumnName("tenTP");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
