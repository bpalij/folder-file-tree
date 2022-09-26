import { FILE, FOLDER } from '../constants/constants';

const data = [
  {
    type: FILE,
    name: 'msdia140.dll',
    mime: 'application/x-msdownload',
  },
  {
    type: FOLDER,
    name: 'Common7',
    children: [
      {
        type: FILE,
        name: 'errlook.exe',
        mime: 'application/x-msdownload',
      },
      {
        type: FILE,
        name: 'errlook.hlp',
        mime: 'application/unknown',
      },
      {
        type: FOLDER,
        name: 'Tools',
        children: [
          {
            type: FILE,
            name: 'Rules2Targets.xslt',
            mime: 'application/xml',
          },
          {
            type: FILE,
            name: 'VCVarsPhoneQueryRegistry.bat',
            mime: 'application/unknown',
          },
          {
            type: FOLDER,
            name: 'Common7',
            children: [
              {
                type: FILE,
                name: 'Rules2Props.xslt',
                mime: 'application/xml',
              },
              {
                type: FILE,
                name: 'vsvars32.bat',
                mime: 'application/unknown',
              },
            ],
          },
          {
            type: FILE,
            name: 'msdia140.dll',
            mime: 'application/x-msdownload',
          },
        ],
      },
    ],
  },
  {
    type: FOLDER,
    name: 'Tools',
    children: [
      {
        type: FILE,
        name: 'Rules2Targets.xslt',
        mime: 'application/xml',
      },
      {
        type: FILE,
        name: 'VCVarsPhoneQueryRegistry.bat',
        mime: 'application/unknown',
      },
      {
        type: FOLDER,
        name: 'Common7',
        children: [
          {
            type: FILE,
            name: 'Rules2Props.xslt',
            mime: 'application/xml',
          },
          {
            type: FILE,
            name: 'vsvars32.bat',
            mime: 'application/unknown',
          },
        ],
      },
      {
        type: FILE,
        name: 'msdia140.dll',
        mime: 'application/x-msdownload',
      },
    ],
  },
  {
    type: FILE,
    name: 'Rules2Targets.xslt',
    mime: 'application/xml',
  },
  {
    type: FILE,
    name: 'VCVarsPhoneQueryRegistry.bat',
    mime: 'application/unknown',
  },
]

export default data
