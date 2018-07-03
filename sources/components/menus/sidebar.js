import {JetView, plugins} from "webix-jet";

const menudata = [

	{id: "dashboard", value: "Dashboard", icon: "home", $css: "dashboard", details:"reports and statistics"},
	{id: "vendor_hutang", value:"Vendor & Hutang", data:[
		{icon:"table", id:"vendor_hutang.surat_permintaan_pembelian", details:"Surat Permintaan Pembelian", value: "SPP"},
		{icon:"table", id:"vendor_hutang.persetujuan_spp", details:"Persetujuan SPP", value: "Persetujuan SPP"},
		{icon:"table", id:"vendor_hutang.penerimaan_barang", details:"Penerimaan Barang", value: "Penerimaan Barang"},
		{icon:"table", id:"vendor_hutang.buku_pembantu_stok", details:"Buku Pembantu Stok", value: "Buku Stok"},
		{icon:"table", id:"vendor_hutang.pemakaian_barang", details:"Pemakaian Barang", value: "Pemakaian Barang"},
		{icon:"table", id:"vendor_hutang.pembayaran_hutang", details:"Pembayaran Hutang", value: "Pembayaran Hutang"},
		{icon:"table", id:"vendor_hutang.buku_pembantu_hutang", details:"Buku Pembantu Hutang", value: "Buku Hutang"},
		{icon:"table", id:"vendor_hutang.aging_hutang", details:"Aging Hutang", value: "Aging Hutang"},
		{icon:"table", id:"vendor_hutang.buku_pembantu_pembayaran_hutang", details:"Buku Pembantu Pembayaran Hutang", value: "Buku Pembayaran Hutang"},
	]},
	{id:"pelanggan_piutang", value:"Pelanggan & Piutang", data:[
		{icon:"table", id:"pelanggan_piutang.pelanggan", details:"Pelanggan", value:"Pelanggan"},
		{icon:"table", id:"pelanggan_piutang.piutang", details:"Piutang", value:"Piutang"},
		{icon:"table", id:"pelanggan_piutang.penagihan_piutang", details:"Penagihan Piutang", value:"Penagihan Piutang"},
		{icon:"table", id:"pelanggan_piutang.penerimaan_piutang", details:"Penerimaan Piutang", value:"Penerimaan Piutang"},
		{icon:"table", id:"pelanggan_piutang.aging_piutang", details:"Aging Piutang", value:"Aging Piutang"},
		{icon:"table", id:"pelanggan_piutang.buku_pembantu_piutang", details:"Buku Pembantu Piutang", value:"Buku Piutang"},
	]},
	{id:"amortisasi", value:"Amortisasi", data:[
		{icon:"table", id:"amortisasi.transaksi_amortisasi", details:"Transaksi Amortisasi", value:"Transaksi Amortisasi"},
		{icon:"table", id:"amortisasi.penyusutan_amortisasi", details:"Penyusutan Amortisasi", value:"Penyusutan Amortisasi"},
		{icon:"table", id:"amortisasi.buku_pembantu_amortisasi", details:"Buku Pembantu Amortisasi", value:"Buku Amortisasi"},
	]},
	{id:"manajemen_kas", value:"Manajemen Kas", data:[
		{icon:"table", id:"manajemen_kas.pengeluaran_kas", details:"Pengeluaran Kas", value:"Pengeluaran Kas"},
		{icon:"table", id:"manajemen_kas.pemasukan_kas", details:"Pemasukan Kas", value:"Pemasukan Kas"},
		{icon:"table", id:"manajemen_kas.buku_pembantu_pengeluaran_kas", details:"Buku Pembantu Pengeluaran Kas", value:"Buku Pengeluaran Kas"},
		{icon:"table", id:"manajemen_kas.buku_pembantu_pemasukan_kas", details:"Buku Pembantu Pemasukan Kas", value:"Buku Pemasukan Kas"},
		{icon:"table", id:"manajemen_kas.transfer_kas_dan_bank", details:"Transfer Kas dan Bank", value:"Transfer Kas dan Bank"},
	]},
	{id:"catatan", value:"Catatan", data:[
		{icon:"table", id:"catatan.mengubah_tahun_pembukuan", details:"Mengubah Tahun Pembukuan", value:"Ubah Tahun Pembukuan"},
		{icon:"table", id:"catatan.menambah_jurnal_umum", details:"Menambah Jurnal Umum", value:"Tambah Jurnal Umum"},
		{icon:"table", id:"catatan.persetujuan_jurnal", details:"Persetujuan Jurnal", value:"Persetujuan Jurnal"},
		{icon:"table", id:"catatan.posting_jurnal", details:"Posting Jurnal", value:"Posting Jurnal"},
		{icon:"table", id:"catatan.buku_besar", details:"Buku Besar", value:"Buku Besar"},
		{icon:"table", id:"catatan.catatan_jurnal", details:"Catatan Jurnal", value:"Catatan Jurnal"},
	]},
	{id:"laporan", value:"Laporan", data:[
		{icon:"table", id:"laporan.mencetak_laporan_neraca", details:"Mencetak Laporan Neraca", value:"Cetak Laporan Neraca"},
		{icon:"table", id:"laporan.eksport_laporan_neraca", details:"Eksport Laporan Neraca", value:"Eksport Laporan Neraca"},
	]},

	/* {id: "main", value: "Main", open: true, data:[
		{ id: "dashboard", value: "Dashboard", icon: "home", $css: "dashboard", details:"reports and statistics"},
		{ id: "orders", value: "Orders", icon: "check-square-o", $css: "orders", details:"order reports and editing"},
		{ id: "products", value: "Products", icon: "cube", $css: "products", details:"all products"},
		{ id: "product_edit", value: "Product Edit", icon: "pencil-square-o", details: "changing product data"}
	]},
	{id: "components", open: true, value:"Components", data:[
		{ id: "datatables", value: "Datatables", icon: "table", details: "datatable examples" },
		{ id: "charts", value: "Charts", icon: "bar-chart-o", details: "charts examples"},
		{ id: "forms", value: "Forms", icon: "list-alt", details: "forms examples"}

	]},
	{id: "uis", value:"UI Examples", open:1, data:[
		{ id: "calendar", value: "My Calendar", icon: "calendar", details: "calendar example" },
		{ id: "files", value: "File Manager", icon: "folder-open-o", details: "file manager example" }

	]} */
];

export default class MenuView extends JetView{
	init(){
		webix.$$("app:menu").parse(menudata);
		this.use(plugins.Menu, "app:menu");
	}	
	config(){
		return {
			width: 200,
			view: "tree", id: "app:menu",
			type: "menuTree2", css: "menu",
			activeTitle: true, select: true,
			tooltip: {
				template: function(obj){
					return obj.$count?"":obj.details;
				}
			},
			on:{
				onBeforeSelect:function(id){
					if(this.getItem(id).$count){
						return false;
					}
				},
				onAfterSelect:function(id){
					var item = this.getItem(id);
					webix.$$("title").parse({title: item.value, details: item.details});
				}
			}
		};
	}
}
