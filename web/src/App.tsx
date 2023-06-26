import React, { Component } from 'react'

import FishboneChart from 'fishbone-chart'

export default class App extends Component {

  	render() {
		const data = {
			'English': {
				'Equipment': ["Different version of software used", "Too many folders in network", "There are many shared storage destinations (Onedrive, D-jet, network folders, etc.)"],
				'People': ["Person in charge is different for each Equipment", "Limited number of people using 3D data", "Not trying to share materials", "Do you understand the manufacturer of the parts?", "Some members cannot use it due to editing using blocks and editors", "I don't use CAD in the first place", "I'm just using it for trial, so I don't know if I will use it in the future, so I have it personally"],
				'Procedures': ["no sharing rules", "Shared folder not defined", "Not sure how to store", "Data formats (DXF, DWG) are inconsistent and inconvenient"],
				'Material': ["The media of materials are different (paper, electronic data, etc.)", "Few manufacturers publish 3D data", "Some file names do not reveal the contents. (Unknown name when downloaded)", "I don't know when the material was obtained, so I don't know if it's the latest", "The paper media obtained at the exhibition are collected and filed as they are"],
			},
			'日本語': {
				'設備': ["使用しているソフトのバージョンが異なる", "ネットワーク内のフォルダが多すぎる", "共有する保存先が多い(Onedrive,D-jet,ネットワークフォルダ等)"],
				'人': ["担当する装置が異なる", "3Dデータを使用する人が限られる", "資料を共有しようとしていない", "部品のメーカを理解できているか？", "ブロックやエディタを使った編集により、つかえないメンバーもいる", "そもそもCADを使っていない", "試しに使っているだけで、今後も使うかわからないので個人持ちしている"],
				'方法': ["共有ルールが決められていない", "共有フォルダが決められていない",
				"保管する方法が決められていない",
				"データ形式（DXF,DWG）がバラバラで使い勝手が悪い"],
				'物': ["資料の媒体が異なる(紙、電子データ等)",
				"3Dデータを公開しているメーカが少ない",
				"ファイル名で中身がわからないものがある。（ダウンロード時の名前がわかりにくい）",
				"資料の入手時期がわからないため最新かどうかわからない",
				"展示会で入手した紙媒体は集めてファイリングされてそのまま"],
			},
		}

    	return (
			<div style={{ width: 1100, margin: "15px auto" }}>
				<h1></h1>
				<hr/>
				<br/>
				<FishboneChart data={data} />
			</div>
		)
  	}
}