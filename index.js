// ƒл€ асинхронной работы используетс€ пакет micro.
const { json } = require('micro');

// «апуск асинхронного сервиса.
module.exports = async req => {

  // »з запроса извлекаютс€ свойства request, session и version.
  const { request, session, version } = await json(req);

  // ¬ тело ответа вставл€ютс€ свойства version и session из запроса.
  // ѕодробнее о формате запроса и ответа Ч в разделе ѕротокол работы навыка.
  return {
    version,
    session,
    response: {

      // ¬ свойстве response.text возвращаетс€ исходна€ реплика пользовател€.
      // ≈сли навык был активирован без дополнительной команды,
      // пользователю нужно сказать "Hello!".
      text: request.original_utterance || 'Hello!',

      // —войство response.end_session возвращаетс€ со значением false,
      // чтобы диалог не завершалс€.
      end_session: false,
    },
  };
};