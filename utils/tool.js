// 分转元
export function Fen2Yuan( num ) {
  if ( typeof num !== "number" || isNaN( num ) ) return 0;
  return Number( num / 100 );
}

// 元转分
export function Yuan2Fen( num ) {
  if ( typeof num !== "number" || isNaN( num ) ) return 0;
  return Math.round(Number( num * 100 ));
}
// 根据字典value 查询 label
export function	getLabelByVal(val, options) {
		let obj = options.find(item=> item.dictValue == val);
		if(obj) return obj.dictLabel;
	}