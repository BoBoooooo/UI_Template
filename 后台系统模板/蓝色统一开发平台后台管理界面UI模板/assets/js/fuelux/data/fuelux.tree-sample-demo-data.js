var DataSourceTree = function(options) {
	this._data 	= options.data;
	this._delay = options.delay;
}

DataSourceTree.prototype.data = function(options, callback) {
	var self = this;
	var $data = null;

	if(!("name" in options) && !("type" in options)){
		$data = this._data;//the root tree
		callback({ data: $data });
		return;
	}
	else if("type" in options && options.type == "folder") {
		if("additionalParameters" in options && "children" in options.additionalParameters)
			$data = options.additionalParameters.children;
		else $data = {}//no data
	}
	
	if($data != null)//this setTimeout is only for mimicking some random delay
		setTimeout(function(){callback({ data: $data });} , parseInt(Math.random() * 500) + 200);

	//we have used static data here
	//but you can retrieve your data dynamically from a server using ajax call
	//checkout examples/treeview.html and examples/treeview.js for more info
};

var tree_data = {
	'for-sale' : {name: '系统管理', type: 'folder'}	,
	'vehicles' : {name: '商品管理', type: 'folder'}	,
	'tickets' : {name: '退换货管理', type: 'item'}	,
	'services' : {name: '采购管理', type: 'item'}	,
	'personals' : {name: '财务管理', type: 'item'}
}
tree_data['for-sale']['additionalParameters'] = {
	'children' : {
		'appliances' : {name: '机构管理', type: 'item'},
		'arts-crafts' : {name: '部门管理', type: 'item'},
		'clothing' : {name: '员工管理', type: 'item'},
		'computers' : {name: '资源管理', type: 'item'},
		'jewelry' : {name: '用户管理', type: 'item'},
		'office-business' : {name: '角色管理', type: 'item'},
		'sports-fitness' : {name: '用户解锁', type: 'item'}
	}
}
tree_data['vehicles']['additionalParameters'] = {
	'children' : {
		'cars' : {name: '机构管理', type: 'folder'},
		'motorcycles' : {name: '部门管理', type: 'item'},
		'boats' : {name: '员工管理', type: 'item'}
	}
}
tree_data['vehicles']['additionalParameters']['children']['cars']['additionalParameters'] = {
	'children' : {
		'classics' : {name: '机构管理', type: 'item'},
		'convertibles' : {name: '部门管理', type: 'item'},
		'coupes' : {name: '员工管理', type: 'item'},
		'hatchbacks' : {name: '资源管理', type: 'item'},
		'hybrids' : {name: '用户管理', type: 'item'},
		'suvs' : {name: '角色管理', type: 'item'},
		'sedans' : {name: '用户解锁', type: 'item'}
	}
}

var treeDataSource = new DataSourceTree({data: tree_data});

var ace_icon = ace.vars['icon'];
//class="'+ace_icon+' fa fa-file-text grey"
//becomes
//class="ace-icon fa fa-file-text grey"
var tree_data_2 = {
	'pictures' : {name: '空管业务运行', type: 'folder', 'icon-class':'red'}	,
	'music' : {name: '空管设备状态', type: 'folder', 'icon-class':'orange'}	,
	'video' : {name: '综合管理数据', type: 'folder', 'icon-class':'blue'}	,
	'documents' : {name: '外界数据', type: 'folder', 'icon-class':'green'}
}
tree_data_2['music']['additionalParameters'] = {
	'children' : [
		{name: '<i class="'+ace_icon+'  blue"></i> 通讯类数据', type: 'item'},
		{name: '<i class="'+ace_icon+'  blue"></i> 导航类数据', type: 'item'},
		{name: '<i class="'+ace_icon+'  blue"></i> 监视类数据', type: 'item'},
		{name: '<i class="'+ace_icon+'  blue"></i> 其他类数据', type: 'item'}
	]
}
tree_data_2['video']['additionalParameters'] = {
	'children' : [
		{name: '<i class="'+ace_icon+' fa fa-film blue"></i> movie1.avi', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-film blue"></i> movie2.avi', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-film blue"></i> movie3.avi', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-film blue"></i> movie4.avi', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-film blue"></i> movie5.avi', type: 'item'}
	]
}
tree_data_2['pictures']['additionalParameters'] = {
	'children' : {
		'wallpapers' : {name: 'Wallpapers', type: 'folder', 'icon-class':'pink'},
		'camera' : {name: 'Camera', type: 'folder', 'icon-class':'pink'}
	}
}
tree_data_2['pictures']['additionalParameters']['children']['wallpapers']['additionalParameters'] = {
	'children' : [
		{name: '<i class="'+ace_icon+' fa fa-picture-o green"></i> wallpaper1.jpg', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-picture-o green"></i> wallpaper2.jpg', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-picture-o green"></i> wallpaper3.jpg', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-picture-o green"></i> wallpaper4.jpg', type: 'item'}
	]
}
tree_data_2['pictures']['additionalParameters']['children']['camera']['additionalParameters'] = {
	'children' : [
		{name: '<i class="'+ace_icon+' fa fa-picture-o green"></i> photo1.jpg', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-picture-o green"></i> photo2.jpg', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-picture-o green"></i> photo3.jpg', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-picture-o green"></i> photo4.jpg', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-picture-o green"></i> photo5.jpg', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-picture-o green"></i> photo6.jpg', type: 'item'}
	]
}


tree_data_2['documents']['additionalParameters'] = {
	'children' : [
		{name: '<i class="'+ace_icon+' fa fa-file-text red"></i> document1.pdf', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-file-text grey"></i> document2.doc', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-file-text grey"></i> document3.doc', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-file-text red"></i> document4.pdf', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-file-text grey"></i> document5.doc', type: 'item'}
	]
}


var treeDataSource2 = new DataSourceTree({data: tree_data_2});