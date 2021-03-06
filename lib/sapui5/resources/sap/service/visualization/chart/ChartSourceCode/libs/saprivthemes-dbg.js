sap.riv.require(
[
{
  qname : 'sap.riv.vizkit.ThemeManager',
  version : '1.0.0'
}
],
function InstallTheme(ThemeManager) {
	var props = {
		background : '#FFF',
		textFontFamily : 'Arial, Helvetica, sans-serif',
		global : {
			'font-family' : 'Arial, Helvetica', // Must
			'font-weight' : 'bold', // Must
			'color' : '#616161', // Must
		},
		legend : {
			title : {
				'font-size' : '14px',
				'font-weight' : 'bold',
			},
			label : {
				'font-size' : '12px',
			}
		},
		title : {
			mainTitle : {
				'font-size' : '16px',
				'color' : '#2B2B2B'
			},
			subTitle : {
				'font-size' : '14px',
				'color' : '#616161'
			}
		},
		pie : {
			isShowOuterShadow : true,
			isShowInnerShadow : true,
			donut : {
				measureLabel : {
					'font-size' : '12px'
				},
			// background : 'red'
			},
			tooltip : {
				valueLabel : {
					'font-size' : '12px',
					'font-weight' : 'bold',
				// 'color': '#000'
				},
				dimensionLabel : {
					'font-size' : '12px',
					'font-weight' : 'normal',
				},
				percentLabel : {
					'font-size' : '12px',
					'font-weight' : 'normal',
				}
			}
		},
		bar : {
			isShowInnerBorder : true,
			isShowOutBorder : true,
			isShowGradient : true,
			isShowShadow : true
		},
		line : {
			marker : {
				'size' : '8',
				isShowShadow : true
			},
			line : {
				'size' : '3',
				isShowShadow : true
			}
		},
		axis : {
			label : {
				'font-size' : '11px',
				'color' : '#616161'
			},
			title : {
				'font-size' : '13px',
				'color' : '#616161'
			},
			xAxisMajorGridLine : {
				color : '#B8B8B8',
				thickness : '1'
			},
			xAxisMinorGridLine : {
				color : '#B8B8B8',
				thickness : '1'
			},
			xAxisSubGridLine : {
				color : '#B8B8B8'
			},
			yAxisMajorGridLine : {
				color : '#B8B8B8',
				thickness : '1'
			},
			yAxisMinorGridLine : {
				color : '#B8B8B8',
				thickness : '1'
			},
			yAxisSubGridLine : {
				color : '#B8B8B8'
			},
			lineColor : '#676767'
		}
	};
	ThemeManager.installTheme('classic-day', props);
});sap.riv.require(
[
{
  qname : 'sap.riv.vizkit.ThemeManager',
  version : '1.0.0'
}
],
function InstallTheme(ThemeManager) {
	var props = {
		background : '#202020',
		textFontFamily : 'Arial, Helvetica, sans-serif',
		global : {
			'font-family' : 'Arial, Helvetica',
			'font-weight' : 'bold',
			'color' : 'c0c0c0'
		},
		legend : {
			title : {
				'font-size' : '14px',
				'color' : '#e5e5e5'
			},
			label : {
				'font-size' : '12px',
				'color' : '#e5e5e5'
			}
		},
		title : {
			mainTitle : {
				'font-size' : '16px',
				'color' : '#dbdbdb'
			},
			subTitle : {
				'font-size' : '14px',
				'color' : '#c0c0c0'
			}
		},
		pie : {
			isShowOuterShadow : true,
			isShowInnerShadow : true,
			donut : {
				measureLabel : {
					'font-size' : '16px',
					'color' : '#616161'
				},
				background : '#FFF'
			},
			tooltip : {
				valueLabel : {
					'font-size' : '12px',
					'color' : '#616161',
					'font-weight' : 'bold',
				},
				dimensionLabel : {
					'font-size' : '12px',
					'color' : '#616161',
					'font-weight' : 'normal',
				},
				percentLabel : {
					'font-size' : '12px',
					'color' : '#616161',
					'font-weight' : 'normal',
				}
			}
		},
		bar : {
			isShowInnerBorder : true,
			isShowOutBorder : false,
			isShowGradient : true,
			isShowShadow : false
		},
		line : {
			marker : {
				'size' : '8',
				isShowShadow : true
			},
			line : {
				'size' : '3',
				isShowShadow : true
			}
		},
		axis : {
			label : {
				'font-size' : '11px',
				'color' : '#c0c0c0'
			},
			title : {
				'font-size' : '13px',
				'color' : '#c0c0c0'
			},
			xAxisMajorGridLine : {
				color : '#333333',
				thickness : '1'
			},
			xAxisMinorGridLine : {
				color : '#333333',
				thickness : '1'
			},
			xAxisSubGridLine : {
				color : '#333333'
			},
			yAxisMajorGridLine : {
				color : '#333333',
				thickness : '1'
			},
			yAxisMinorGridLine : {
				color : '#333333',
				thickness : '1'
			},
			yAxisSubGridLine : {
				color : '#333333'
			},
			lineColor : '#676767'
		}
	};
	ThemeManager.installTheme('classic-night', props);
});