/**
 * CRC（循环冗余校验）anooee
 * @param {Buffer} buffer HEX数组
 */
function crc16(buffer) {
    var crc = 0xFFFF;
    var odd;
    for (var i = 0; i < buffer.length; i++) {
        crc ^= (buffer[i] << 8)
        for (var j = 0; j < 8; j++) {
            odd = crc & 0x8000;
            crc = crc << 1;
            if (odd) {
                crc = crc ^ 0x1021
            }
        }
    }
    crc &= 0xFFFF
    return int4str(crc.toString(16).toLocaleUpperCase(),4)
}

/**
 * 数字/字符格式化为左边补0字符串，
 * @param {Number} num 被格式化的数字/字符
 * @param {Number} len 格式化的长度
 */
function int4str(num,len){
    return (Array(len).join('0') + num).slice(-len)
}
