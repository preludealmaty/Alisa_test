// ��� ����������� ������ ������������ ����� micro.
const { json } = require('micro');

// ������ ������������ �������.
module.exports = async req => {

  // �� ������� ����������� �������� request, session � version.
  const { request, session, version } = await json(req);

  // � ���� ������ ����������� �������� version � session �� �������.
  // ��������� � ������� ������� � ������ � � ������� �������� ������ ������.
  return {
    version,
    session,
    response: {

      // � �������� response.text ������������ �������� ������� ������������.
      // ���� ����� ��� ����������� ��� �������������� �������,
      // ������������ ����� ������� "Hello!".
      text: request.original_utterance || 'Hello!',

      // �������� response.end_session ������������ �� ��������� false,
      // ����� ������ �� ����������.
      end_session: false,
    },
  };
};