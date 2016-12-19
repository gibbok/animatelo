var lineBreakRegexGlobal = /\r\n|\r|\n/g;

/**
 * @param {Element} node
 * @returns {number}
 */
exports.getNodeColumn = function(node) {
    var currentToken = node.getFirstToken().getPreviousToken();
    var indentationLevel = 0;
    while (currentToken) {
        if (currentToken.getNewlineCount() > 0) {
            var sourceCodeLines = currentToken.getSourceCodeLines();
            indentationLevel += sourceCodeLines[sourceCodeLines.length - 1].length;
            break;
        }

        indentationLevel += currentToken.getSourceCodeLength();

        currentToken = currentToken.getPreviousToken();
    }
    return indentationLevel;
};

/**
 * @param {string} code
 * @returns {Array}
 */
exports.getLineInfo = function(code) {
    var lines = [];
    lineBreakRegexGlobal.lastIndex = 0;
    var lastOffset = 0;
    var match;
    while ((match = lineBreakRegexGlobal.exec(code)) !== null) {
        lines.push({
            offset: lastOffset,
            text: code.substring(lastOffset, match.index),
            lineBreak: match[0]
        });
        lastOffset = match.index + match[0].length;
    }
    lines.push({offset: lastOffset, text: code.substr(lastOffset), lineBreak: null});
    return lines;
};

/**
 * @param {Element} tokenBefore
 * @param {Element} tokenAfter
 * @returns {number}
 */
exports.getLineCountBetween = function(tokenBefore, tokenAfter) {
    if (tokenBefore === tokenAfter) {
        return 0;
    }

    var currentToken = tokenBefore.getNextToken();
    var lineCount = 0;
    while (currentToken) {
        if (currentToken === tokenAfter) {
            break;
        }

        lineCount += currentToken.getNewlineCount();
        currentToken = currentToken.getNextToken();
    }
    return lineCount;
};
