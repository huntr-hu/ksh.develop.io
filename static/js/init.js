_initConfig = 
{
	'appContainerId': 'appPriceIndex',
	'xlsxFilePath': './data/PIC_input.xlsx', // https://ksh-io.now.sh/data/PIC_input.xlsx
	'moreInfoLink': 'http://www.ksh.hu/arak',
};

(function()
{
	var _appContId = document.getElementById(_initConfig.appContainerId);

	if( _appContId != null && typeof _appContId != 'undefined' )
	{
		var _thisPath = document.getElementById('initScript');

		if( _thisPath != null && typeof _thisPath != 'undefined' )
		{
			var _basePath = _thisPath.src.replace('init.js','');
		}
		else
		{
			var _basePath = './static/js/';
		}

		var _pathList = ['runtime.js','chunk.js','main.js'];

		for( i = 0; i < _pathList.length; i++ )
		{
			var po = document.createElement('script');
			po.type = 'text/javascript';
			po.charset = 'UTF-8';
			po.async = true;
			po.src = _basePath + _pathList[i];
			document.head.appendChild(po);
		}
	}
	else
	{
		console.error('init.js: Az appContainerId ertekekent megadott azonositoval ellatott elem nem letezik a body szekcioban');
	}
})();
