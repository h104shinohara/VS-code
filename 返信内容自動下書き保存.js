function createDraftsForLabel() {
  var labelName = 'YOUR_LABEL_NAME';  // 対象のラベル名を指定します。
  var replyContent = 'こちらは下書きの内容です。';  // 下書きとして保存する返信内容を指定します。
  
  var threads = GmailApp.search('label:' + labelName);
  
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    var lastMessage = messages[messages.length - 1]; // スレッド内の最後のメッセージを取得
    GmailApp.createDraft(
      lastMessage.getFrom(), 
      'Re: ' + lastMessage.getSubject(), 
      replyContent,
      {
        threadId: threads[i].getId()
      }
    );
  }
}
