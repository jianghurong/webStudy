**http消息头**允许客户端和服务器通过request和response传递附加信息。
分类：
General headers：同时适用于请求和响应消息，但与最终消息主体中传输的数据无关的消息头。
Request headers: 包含更多有关要获取的资源或客户端本身信息的消息头。
response headers: 包含有关响应的补充信息，如其它位置或服务器本身（名称和版本等）的消息头。
Entity headers: 包含有关实体的主体信息，比如主体长(Content-Length)和其MIME类型