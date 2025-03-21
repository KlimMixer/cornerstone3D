// The table below was generated by running the following javascript in the console window while
// viewing the HTML version of the standard here:
// DICOM Standard here: http://dicom.nema.org/medical/dicom/current/output/html/part06.html
// see the blog post about it here: http://chafey.blogspot.com/2015/08/parsing-dicom-standard-with-javascript.html

/*
 (function () {
 var elements = document.querySelectorAll('#table_A-1 ~ div tbody tr');
 var result = "";for(var i=0; i < elements.length; i++) {
 result += "'" + elements[i].childNodes[1].childNodes[1].innerText.replace(/[^\x20-\x7E]+/g, '')  + "':'" +
 elements[i].childNodes[3].childNodes[1].innerText.replace(/[^\x20-\x7E]+/g, '') + "',\n";
 }
 return result;
 })();
 */

var uids = {
  '1.2.840.10008.1.1': 'Verification SOP Class',
  '1.2.840.10008.1.2':
    'Implicit VR Little Endian: Default Transfer Syntax for DICOM',
  '1.2.840.10008.1.2.1': 'Explicit VR Little Endian',
  '1.2.840.10008.1.2.1.99': 'Deflated Explicit VR Little Endian',
  '1.2.840.10008.1.2.2': 'Explicit VR Big Endian (Retired)',
  '1.2.840.10008.1.2.4.50':
    'JPEG Baseline (Process 1): Default Transfer Syntax for Lossy JPEG 8 Bit Image Compression',
  '1.2.840.10008.1.2.4.51':
    'JPEG Extended (Process 2 & 4): Default Transfer Syntax for Lossy JPEG 12 Bit Image Compression (Process 4 only)',
  '1.2.840.10008.1.2.4.52': 'JPEG Extended (Process 3 & 5) (Retired)',
  '1.2.840.10008.1.2.4.53':
    'JPEG Spectral Selection, Non-Hierarchical (Process 6 & 8) (Retired)',
  '1.2.840.10008.1.2.4.54':
    'JPEG Spectral Selection, Non-Hierarchical (Process 7 & 9) (Retired)',
  '1.2.840.10008.1.2.4.55':
    'JPEG Full Progression, Non-Hierarchical (Process 10 & 12) (Retired)',
  '1.2.840.10008.1.2.4.56':
    'JPEG Full Progression, Non-Hierarchical (Process 11 & 13) (Retired)',
  '1.2.840.10008.1.2.4.57': 'JPEG Lossless, Non-Hierarchical (Process 14)',
  '1.2.840.10008.1.2.4.58':
    'JPEG Lossless, Non-Hierarchical (Process 15) (Retired)',
  '1.2.840.10008.1.2.4.59':
    'JPEG Extended, Hierarchical (Process 16 & 18) (Retired)',
  '1.2.840.10008.1.2.4.60':
    'JPEG Extended, Hierarchical (Process 17 & 19) (Retired)',
  '1.2.840.10008.1.2.4.61':
    'JPEG Spectral Selection, Hierarchical (Process 20 & 22) (Retired)',
  '1.2.840.10008.1.2.4.62':
    'JPEG Spectral Selection, Hierarchical (Process 21 & 23) (Retired)',
  '1.2.840.10008.1.2.4.63':
    'JPEG Full Progression, Hierarchical (Process 24 & 26) (Retired)',
  '1.2.840.10008.1.2.4.64':
    'JPEG Full Progression, Hierarchical (Process 25 & 27) (Retired)',
  '1.2.840.10008.1.2.4.65':
    'JPEG Lossless, Hierarchical (Process 28) (Retired)',
  '1.2.840.10008.1.2.4.66':
    'JPEG Lossless, Hierarchical (Process 29) (Retired)',
  '1.2.840.10008.1.2.4.70':
    'JPEG Lossless, Non-Hierarchical, First-Order Prediction (Process 14 [Selection Value 1]): Default Transfer Syntax for Lossless JPEG Image Compression',
  '1.2.840.10008.1.2.4.80': 'JPEG-LS Lossless Image Compression',
  '1.2.840.10008.1.2.4.81': 'JPEG-LS Lossy (Near-Lossless) Image Compression',
  '1.2.840.10008.1.2.4.90': 'JPEG 2000 Image Compression (Lossless Only)',
  '1.2.840.10008.1.2.4.91': 'JPEG 2000 Image Compression',
  '1.2.840.10008.1.2.4.92':
    'JPEG 2000 Part 2 Multi-component Image Compression (Lossless Only)',
  '1.2.840.10008.1.2.4.93':
    'JPEG 2000 Part 2 Multi-component Image Compression',
  '1.2.840.10008.1.2.4.94': 'JPIP Referenced',
  '1.2.840.10008.1.2.4.95': 'JPIP Referenced Deflate',
  '1.2.840.10008.1.2.4.100': 'MPEG2 Main Profile @ Main Level',
  '1.2.840.10008.1.2.4.101': 'MPEG2 Main Profile @ High Level',
  '1.2.840.10008.1.2.4.102': 'MPEG-4 AVC/H.264 High Profile / Level 4.1',
  '1.2.840.10008.1.2.4.103':
    'MPEG-4 AVC/H.264 BD-compatible High Profile / Level 4.1',
  '1.2.840.10008.1.2.4.104':
    'MPEG-4 AVC/H.264 High Profile / Level 4.2 For 2D Video',
  '1.2.840.10008.1.2.4.105':
    'MPEG-4 AVC/H.264 High Profile / Level 4.2 For 3D Video',
  '1.2.840.10008.1.2.4.106': 'MPEG-4 AVC/H.264 Stereo High Profile / Level 4.2',
  '1.2.840.10008.1.2.5': 'RLE Lossless',
  '1.2.840.10008.1.2.6.1': 'RFC 2557 MIME encapsulation',
  '1.2.840.10008.1.2.6.2': 'XML Encoding',
  '1.2.840.10008.1.3.10': 'Media Storage Directory Storage',
  '1.2.840.10008.1.4.1.1': 'Talairach Brain Atlas Frame of Reference',
  '1.2.840.10008.1.4.1.2': 'SPM2 T1 Frame of Reference',
  '1.2.840.10008.1.4.1.3': 'SPM2 T2 Frame of Reference',
  '1.2.840.10008.1.4.1.4': 'SPM2 PD Frame of Reference',
  '1.2.840.10008.1.4.1.5': 'SPM2 EPI Frame of Reference',
  '1.2.840.10008.1.4.1.6': 'SPM2 FIL T1 Frame of Reference',
  '1.2.840.10008.1.4.1.7': 'SPM2 PET Frame of Reference',
  '1.2.840.10008.1.4.1.8': 'SPM2 TRANSM Frame of Reference',
  '1.2.840.10008.1.4.1.9': 'SPM2 SPECT Frame of Reference',
  '1.2.840.10008.1.4.1.10': 'SPM2 GRAY Frame of Reference',
  '1.2.840.10008.1.4.1.11': 'SPM2 WHITE Frame of Reference',
  '1.2.840.10008.1.4.1.12': 'SPM2 CSF Frame of Reference',
  '1.2.840.10008.1.4.1.13': 'SPM2 BRAINMASK Frame of Reference',
  '1.2.840.10008.1.4.1.14': 'SPM2 AVG305T1 Frame of Reference',
  '1.2.840.10008.1.4.1.15': 'SPM2 AVG152T1 Frame of Reference',
  '1.2.840.10008.1.4.1.16': 'SPM2 AVG152T2 Frame of Reference',
  '1.2.840.10008.1.4.1.17': 'SPM2 AVG152PD Frame of Reference',
  '1.2.840.10008.1.4.1.18': 'SPM2 SINGLESUBJT1 Frame of Reference',
  '1.2.840.10008.1.4.2.1': 'ICBM 452 T1 Frame of Reference',
  '1.2.840.10008.1.4.2.2': 'ICBM Single Subject MRI Frame of Reference',
  '1.2.840.10008.1.5.1': 'Hot Iron Color Palette SOP Instance',
  '1.2.840.10008.1.5.2': 'PET Color Palette SOP Instance',
  '1.2.840.10008.1.5.3': 'Hot Metal Blue Color Palette SOP Instance',
  '1.2.840.10008.1.5.4': 'PET 20 Step Color Palette SOP Instance',
  '1.2.840.10008.1.9': 'Basic Study Content Notification SOP Class (Retired)',
  '1.2.840.10008.1.20.1': 'Storage Commitment Push Model SOP Class',
  '1.2.840.10008.1.20.1.1': 'Storage Commitment Push Model SOP Instance',
  '1.2.840.10008.1.20.2': 'Storage Commitment Pull Model SOP Class (Retired)',
  '1.2.840.10008.1.20.2.1':
    'Storage Commitment Pull Model SOP Instance (Retired)',
  '1.2.840.10008.1.40': 'Procedural Event Logging SOP Class',
  '1.2.840.10008.1.40.1': 'Procedural Event Logging SOP Instance',
  '1.2.840.10008.1.42': 'Substance Administration Logging SOP Class',
  '1.2.840.10008.1.42.1': 'Substance Administration Logging SOP Instance',
  '1.2.840.10008.2.6.1': 'DICOM UID Registry',
  '1.2.840.10008.2.16.4': 'DICOM Controlled Terminology',
  '1.2.840.10008.3.1.1.1': 'DICOM Application Context Name',
  '1.2.840.10008.3.1.2.1.1': 'Detached Patient Management SOP Class (Retired)',
  '1.2.840.10008.3.1.2.1.4':
    'Detached Patient Management Meta SOP Class (Retired)',
  '1.2.840.10008.3.1.2.2.1': 'Detached Visit Management SOP Class (Retired)',
  '1.2.840.10008.3.1.2.3.1': 'Detached Study Management SOP Class (Retired)',
  '1.2.840.10008.3.1.2.3.2': 'Study Component Management SOP Class (Retired)',
  '1.2.840.10008.3.1.2.3.3': 'Modality Performed Procedure Step SOP Class',
  '1.2.840.10008.3.1.2.3.4':
    'Modality Performed Procedure Step Retrieve SOP Class',
  '1.2.840.10008.3.1.2.3.5':
    'Modality Performed Procedure Step Notification SOP Class',
  '1.2.840.10008.3.1.2.5.1': 'Detached Results Management SOP Class (Retired)',
  '1.2.840.10008.3.1.2.5.4':
    'Detached Results Management Meta SOP Class (Retired)',
  '1.2.840.10008.3.1.2.5.5':
    'Detached Study Management Meta SOP Class (Retired)',
  '1.2.840.10008.3.1.2.6.1':
    'Detached Interpretation Management SOP Class (Retired)',
  '1.2.840.10008.4.2': 'Storage Service Class',
  '1.2.840.10008.5.1.1.1': 'Basic Film Session SOP Class',
  '1.2.840.10008.5.1.1.2': 'Basic Film Box SOP Class',
  '1.2.840.10008.5.1.1.4': 'Basic Grayscale Image Box SOP Class',
  '1.2.840.10008.5.1.1.4.1': 'Basic Color Image Box SOP Class',
  '1.2.840.10008.5.1.1.4.2': 'Referenced Image Box SOP Class (Retired)',
  '1.2.840.10008.5.1.1.9': 'Basic Grayscale Print Management Meta SOP Class',
  '1.2.840.10008.5.1.1.9.1':
    'Referenced Grayscale Print Management Meta SOP Class (Retired)',
  '1.2.840.10008.5.1.1.14': 'Print Job SOP Class',
  '1.2.840.10008.5.1.1.15': 'Basic Annotation Box SOP Class',
  '1.2.840.10008.5.1.1.16': 'Printer SOP Class',
  '1.2.840.10008.5.1.1.16.376': 'Printer Configuration Retrieval SOP Class',
  '1.2.840.10008.5.1.1.17': 'Printer SOP Instance',
  '1.2.840.10008.5.1.1.17.376': 'Printer Configuration Retrieval SOP Instance',
  '1.2.840.10008.5.1.1.18': 'Basic Color Print Management Meta SOP Class',
  '1.2.840.10008.5.1.1.18.1':
    'Referenced Color Print Management Meta SOP Class (Retired)',
  '1.2.840.10008.5.1.1.22': 'VOI LUT Box SOP Class',
  '1.2.840.10008.5.1.1.23': 'Presentation LUT SOP Class',
  '1.2.840.10008.5.1.1.24': 'Image Overlay Box SOP Class (Retired)',
  '1.2.840.10008.5.1.1.24.1':
    'Basic Print Image Overlay Box SOP Class (Retired)',
  '1.2.840.10008.5.1.1.25': 'Print Queue SOP Instance (Retired)',
  '1.2.840.10008.5.1.1.26': 'Print Queue Management SOP Class (Retired)',
  '1.2.840.10008.5.1.1.27': 'Stored Print Storage SOP Class (Retired)',
  '1.2.840.10008.5.1.1.29':
    'Hardcopy Grayscale Image Storage SOP Class (Retired)',
  '1.2.840.10008.5.1.1.30': 'Hardcopy Color Image Storage SOP Class (Retired)',
  '1.2.840.10008.5.1.1.31': 'Pull Print Request SOP Class (Retired)',
  '1.2.840.10008.5.1.1.32':
    'Pull Stored Print Management Meta SOP Class (Retired)',
  '1.2.840.10008.5.1.1.33': 'Media Creation Management SOP Class UID',
  '1.2.840.10008.5.1.1.40': 'Display System SOP Class',
  '1.2.840.10008.5.1.1.40.1': 'Display System SOP Instance',
  '1.2.840.10008.5.1.4.1.1.1': 'Computed Radiography Image Storage',
  '1.2.840.10008.5.1.4.1.1.1.1':
    'Digital X-Ray Image Storage - For Presentation',
  '1.2.840.10008.5.1.4.1.1.1.1.1':
    'Digital X-Ray Image Storage - For Processing',
  '1.2.840.10008.5.1.4.1.1.1.2':
    'Digital Mammography X-Ray Image Storage - For Presentation',
  '1.2.840.10008.5.1.4.1.1.1.2.1':
    'Digital Mammography X-Ray Image Storage - For Processing',
  '1.2.840.10008.5.1.4.1.1.1.3':
    'Digital Intra-Oral X-Ray Image Storage - For Presentation',
  '1.2.840.10008.5.1.4.1.1.1.3.1':
    'Digital Intra-Oral X-Ray Image Storage - For Processing',
  '1.2.840.10008.5.1.4.1.1.2': 'CT Image Storage',
  '1.2.840.10008.5.1.4.1.1.2.1': 'Enhanced CT Image Storage',
  '1.2.840.10008.5.1.4.1.1.2.2': 'Legacy Converted Enhanced CT Image Storage',
  '1.2.840.10008.5.1.4.1.1.3': 'Ultrasound Multi-frame Image Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.3.1': 'Ultrasound Multi-frame Image Storage',
  '1.2.840.10008.5.1.4.1.1.4': 'MR Image Storage',
  '1.2.840.10008.5.1.4.1.1.4.1': 'Enhanced MR Image Storage',
  '1.2.840.10008.5.1.4.1.1.4.2': 'MR Spectroscopy Storage',
  '1.2.840.10008.5.1.4.1.1.4.3': 'Enhanced MR Color Image Storage',
  '1.2.840.10008.5.1.4.1.1.4.4': 'Legacy Converted Enhanced MR Image Storage',
  '1.2.840.10008.5.1.4.1.1.5': 'Nuclear Medicine Image Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.6': 'Ultrasound Image Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.6.1': 'Ultrasound Image Storage',
  '1.2.840.10008.5.1.4.1.1.6.2': 'Enhanced US Volume Storage',
  '1.2.840.10008.5.1.4.1.1.7': 'Secondary Capture Image Storage',
  '1.2.840.10008.5.1.4.1.1.7.1':
    'Multi-frame Single Bit Secondary Capture Image Storage',
  '1.2.840.10008.5.1.4.1.1.7.2':
    'Multi-frame Grayscale Byte Secondary Capture Image Storage',
  '1.2.840.10008.5.1.4.1.1.7.3':
    'Multi-frame Grayscale Word Secondary Capture Image Storage',
  '1.2.840.10008.5.1.4.1.1.7.4':
    'Multi-frame True Color Secondary Capture Image Storage',
  '1.2.840.10008.5.1.4.1.1.8': 'Standalone Overlay Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.9': 'Standalone Curve Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.9.1': 'Waveform Storage - Trial (Retired)',
  '1.2.840.10008.5.1.4.1.1.9.1.1': '12-lead ECG Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.9.1.2': 'General ECG Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.9.1.3': 'Ambulatory ECG Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.9.2.1': 'Hemodynamic Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.9.3.1': 'Cardiac Electrophysiology Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.9.4.1': 'Basic Voice Audio Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.9.4.2': 'General Audio Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.9.5.1': 'Arterial Pulse Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.9.6.1': 'Respiratory Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.10': 'Standalone Modality LUT Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.11': 'Standalone VOI LUT Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.11.1':
    'Grayscale Softcopy Presentation State Storage SOP Class',
  '1.2.840.10008.5.1.4.1.1.11.2':
    'Color Softcopy Presentation State Storage SOP Class',
  '1.2.840.10008.5.1.4.1.1.11.3':
    'Pseudo-Color Softcopy Presentation State Storage SOP Class',
  '1.2.840.10008.5.1.4.1.1.11.4':
    'Blending Softcopy Presentation State Storage SOP Class',
  '1.2.840.10008.5.1.4.1.1.11.5':
    'XA/XRF Grayscale Softcopy Presentation State Storage',
  '1.2.840.10008.5.1.4.1.1.12.1': 'X-Ray Angiographic Image Storage',
  '1.2.840.10008.5.1.4.1.1.12.1.1': 'Enhanced XA Image Storage',
  '1.2.840.10008.5.1.4.1.1.12.2': 'X-Ray Radiofluoroscopic Image Storage',
  '1.2.840.10008.5.1.4.1.1.12.2.1': 'Enhanced XRF Image Storage',
  '1.2.840.10008.5.1.4.1.1.12.3':
    'X-Ray Angiographic Bi-Plane Image Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.13.1.1': 'X-Ray 3D Angiographic Image Storage',
  '1.2.840.10008.5.1.4.1.1.13.1.2': 'X-Ray 3D Craniofacial Image Storage',
  '1.2.840.10008.5.1.4.1.1.13.1.3': 'Breast Tomosynthesis Image Storage',
  '1.2.840.10008.5.1.4.1.1.13.1.4':
    'Breast Projection X-Ray Image Storage - For Presentation',
  '1.2.840.10008.5.1.4.1.1.13.1.5':
    'Breast Projection X-Ray Image Storage - For Processing',
  '1.2.840.10008.5.1.4.1.1.14.1':
    'Intravascular Optical Coherence Tomography Image Storage - For Presentation',
  '1.2.840.10008.5.1.4.1.1.14.2':
    'Intravascular Optical Coherence Tomography Image Storage - For Processing',
  '1.2.840.10008.5.1.4.1.1.20': 'Nuclear Medicine Image Storage',
  '1.2.840.10008.5.1.4.1.1.30': 'Parametric Map Storage',
  '1.2.840.10008.5.1.4.1.1.66': 'Raw Data Storage',
  '1.2.840.10008.5.1.4.1.1.66.1': 'Spatial Registration Storage',
  '1.2.840.10008.5.1.4.1.1.66.2': 'Spatial Fiducials Storage',
  '1.2.840.10008.5.1.4.1.1.66.3': 'Deformable Spatial Registration Storage',
  '1.2.840.10008.5.1.4.1.1.66.4': 'Segmentation Storage',
  '1.2.840.10008.5.1.4.1.1.66.5': 'Surface Segmentation Storage',
  '1.2.840.10008.5.1.4.1.1.67': 'Real World Value Mapping Storage',
  '1.2.840.10008.5.1.4.1.1.68.1': 'Surface Scan Mesh Storage',
  '1.2.840.10008.5.1.4.1.1.68.2': 'Surface Scan Point Cloud Storage',
  '1.2.840.10008.5.1.4.1.1.77.1': 'VL Image Storage - Trial (Retired)',
  '1.2.840.10008.5.1.4.1.1.77.2':
    'VL Multi-frame Image Storage - Trial (Retired)',
  '1.2.840.10008.5.1.4.1.1.77.1.1': 'VL Endoscopic Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.1.1': 'Video Endoscopic Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.2': 'VL Microscopic Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.2.1': 'Video Microscopic Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.3':
    'VL Slide-Coordinates Microscopic Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.4': 'VL Photographic Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.4.1': 'Video Photographic Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.5.1':
    'Ophthalmic Photography 8 Bit Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.5.2':
    'Ophthalmic Photography 16 Bit Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.5.3': 'Stereometric Relationship Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.5.4': 'Ophthalmic Tomography Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.5.5':
    'Wide Field Ophthalmic Photography Stereographic Projection Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.5.6':
    'Wide Field Ophthalmic Photography 3D Coordinates Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.6': 'VL Whole Slide Microscopy Image Storage',
  '1.2.840.10008.5.1.4.1.1.78.1': 'Lensometry Measurements Storage',
  '1.2.840.10008.5.1.4.1.1.78.2': 'Autorefraction Measurements Storage',
  '1.2.840.10008.5.1.4.1.1.78.3': 'Keratometry Measurements Storage',
  '1.2.840.10008.5.1.4.1.1.78.4': 'Subjective Refraction Measurements Storage',
  '1.2.840.10008.5.1.4.1.1.78.5': 'Visual Acuity Measurements Storage',
  '1.2.840.10008.5.1.4.1.1.78.6': 'Spectacle Prescription Report Storage',
  '1.2.840.10008.5.1.4.1.1.78.7': 'Ophthalmic Axial Measurements Storage',
  '1.2.840.10008.5.1.4.1.1.78.8': 'Intraocular Lens Calculations Storage',
  '1.2.840.10008.5.1.4.1.1.79.1':
    'Macular Grid Thickness and Volume Report Storage',
  '1.2.840.10008.5.1.4.1.1.80.1':
    'Ophthalmic Visual Field Static Perimetry Measurements Storage',
  '1.2.840.10008.5.1.4.1.1.81.1': 'Ophthalmic Thickness Map Storage',
  '1.2.840.10008.5.1.4.1.1.82.1': 'Corneal Topography Map Storage',
  '1.2.840.10008.5.1.4.1.1.88.1': 'Text SR Storage - Trial (Retired)',
  '1.2.840.10008.5.1.4.1.1.88.2': 'Audio SR Storage - Trial (Retired)',
  '1.2.840.10008.5.1.4.1.1.88.3': 'Detail SR Storage - Trial (Retired)',
  '1.2.840.10008.5.1.4.1.1.88.4': 'Comprehensive SR Storage - Trial (Retired)',
  '1.2.840.10008.5.1.4.1.1.88.11': 'Basic Text SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.22': 'Enhanced SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.33': 'Comprehensive SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.34': 'Comprehensive 3D SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.35': 'Extensible SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.40': 'Procedure Log Storage',
  '1.2.840.10008.5.1.4.1.1.88.50': 'Mammography CAD SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.59': 'Key Object Selection Document Storage',
  '1.2.840.10008.5.1.4.1.1.88.65': 'Chest CAD SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.67': 'X-Ray Radiation Dose SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.68':
    'Radiopharmaceutical Radiation Dose SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.69': 'Colon CAD SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.70': 'Implantation Plan SR Storage',
  '1.2.840.10008.5.1.4.1.1.104.1': 'Encapsulated PDF Storage',
  '1.2.840.10008.5.1.4.1.1.104.2': 'Encapsulated CDA Storage',
  '1.2.840.10008.5.1.4.1.1.128': 'Positron Emission Tomography Image Storage',
  '1.2.840.10008.5.1.4.1.1.128.1':
    'Legacy Converted Enhanced PET Image Storage',
  '1.2.840.10008.5.1.4.1.1.129': 'Standalone PET Curve Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.130': 'Enhanced PET Image Storage',
  '1.2.840.10008.5.1.4.1.1.131': 'Basic Structured Display Storage',
  '1.2.840.10008.5.1.4.1.1.481.1': 'RT Image Storage',
  '1.2.840.10008.5.1.4.1.1.481.2': 'RT Dose Storage',
  '1.2.840.10008.5.1.4.1.1.481.3': 'RT Structure Set Storage',
  '1.2.840.10008.5.1.4.1.1.481.4': 'RT Beams Treatment Record Storage',
  '1.2.840.10008.5.1.4.1.1.481.5': 'RT Plan Storage',
  '1.2.840.10008.5.1.4.1.1.481.6': 'RT Brachy Treatment Record Storage',
  '1.2.840.10008.5.1.4.1.1.481.7': 'RT Treatment Summary Record Storage',
  '1.2.840.10008.5.1.4.1.1.481.8': 'RT Ion Plan Storage',
  '1.2.840.10008.5.1.4.1.1.481.9': 'RT Ion Beams Treatment Record Storage',
  '1.2.840.10008.5.1.4.1.1.501.1': 'DICOS CT Image Storage',
  '1.2.840.10008.5.1.4.1.1.501.2.1':
    'DICOS Digital X-Ray Image Storage - For Presentation',
  '1.2.840.10008.5.1.4.1.1.501.2.2':
    'DICOS Digital X-Ray Image Storage - For Processing',
  '1.2.840.10008.5.1.4.1.1.501.3': 'DICOS Threat Detection Report Storage',
  '1.2.840.10008.5.1.4.1.1.501.4': 'DICOS 2D AIT Storage',
  '1.2.840.10008.5.1.4.1.1.501.5': 'DICOS 3D AIT Storage',
  '1.2.840.10008.5.1.4.1.1.501.6': 'DICOS Quadrupole Resonance (QR) Storage',
  '1.2.840.10008.5.1.4.1.1.601.1': 'Eddy Current Image Storage',
  '1.2.840.10008.5.1.4.1.1.601.2': 'Eddy Current Multi-frame Image Storage',
  '1.2.840.10008.5.1.4.1.2.1.1':
    'Patient Root Query/Retrieve Information Model - FIND',
  '1.2.840.10008.5.1.4.1.2.1.2':
    'Patient Root Query/Retrieve Information Model - MOVE',
  '1.2.840.10008.5.1.4.1.2.1.3':
    'Patient Root Query/Retrieve Information Model - GET',
  '1.2.840.10008.5.1.4.1.2.2.1':
    'Study Root Query/Retrieve Information Model - FIND',
  '1.2.840.10008.5.1.4.1.2.2.2':
    'Study Root Query/Retrieve Information Model - MOVE',
  '1.2.840.10008.5.1.4.1.2.2.3':
    'Study Root Query/Retrieve Information Model - GET',
  '1.2.840.10008.5.1.4.1.2.3.1':
    'Patient/Study Only Query/Retrieve Information Model - FIND (Retired)',
  '1.2.840.10008.5.1.4.1.2.3.2':
    'Patient/Study Only Query/Retrieve Information Model - MOVE (Retired)',
  '1.2.840.10008.5.1.4.1.2.3.3':
    'Patient/Study Only Query/Retrieve Information Model - GET (Retired)',
  '1.2.840.10008.5.1.4.1.2.4.2': 'Composite Instance Root Retrieve - MOVE',
  '1.2.840.10008.5.1.4.1.2.4.3': 'Composite Instance Root Retrieve - GET',
  '1.2.840.10008.5.1.4.1.2.5.3':
    'Composite Instance Retrieve Without Bulk Data - GET',
  '1.2.840.10008.5.1.4.31': 'Modality Worklist Information Model - FIND',
  '1.2.840.10008.5.1.4.32':
    'General Purpose Worklist Management Meta SOP Class (Retired)',
  '1.2.840.10008.5.1.4.32.1':
    'General Purpose Worklist Information Model - FIND (Retired)',
  '1.2.840.10008.5.1.4.32.2':
    'General Purpose Scheduled Procedure Step SOP Class (Retired)',
  '1.2.840.10008.5.1.4.32.3':
    'General Purpose Performed Procedure Step SOP Class (Retired)',
  '1.2.840.10008.5.1.4.33': 'Instance Availability Notification SOP Class',
  '1.2.840.10008.5.1.4.34.1':
    'RT Beams Delivery Instruction Storage - Trial (Retired)',
  '1.2.840.10008.5.1.4.34.2':
    'RT Conventional Machine Verification - Trial (Retired)',
  '1.2.840.10008.5.1.4.34.3': 'RT Ion Machine Verification - Trial (Retired)',
  '1.2.840.10008.5.1.4.34.4':
    'Unified Worklist and Procedure Step Service Class - Trial (Retired)',
  '1.2.840.10008.5.1.4.34.4.1':
    'Unified Procedure Step - Push SOP Class - Trial (Retired)',
  '1.2.840.10008.5.1.4.34.4.2':
    'Unified Procedure Step - Watch SOP Class - Trial (Retired)',
  '1.2.840.10008.5.1.4.34.4.3':
    'Unified Procedure Step - Pull SOP Class - Trial (Retired)',
  '1.2.840.10008.5.1.4.34.4.4':
    'Unified Procedure Step - Event SOP Class - Trial (Retired)',
  '1.2.840.10008.5.1.4.34.5': 'UPS Global Subscription SOP Instance',
  '1.2.840.10008.5.1.4.34.5.1': 'UPS Filtered Global Subscription SOP Instance',
  '1.2.840.10008.5.1.4.34.6':
    'Unified Worklist and Procedure Step Service Class',
  '1.2.840.10008.5.1.4.34.6.1': 'Unified Procedure Step - Push SOP Class',
  '1.2.840.10008.5.1.4.34.6.2': 'Unified Procedure Step - Watch SOP Class',
  '1.2.840.10008.5.1.4.34.6.3': 'Unified Procedure Step - Pull SOP Class',
  '1.2.840.10008.5.1.4.34.6.4': 'Unified Procedure Step - Event SOP Class',
  '1.2.840.10008.5.1.4.34.7': 'RT Beams Delivery Instruction Storage',
  '1.2.840.10008.5.1.4.34.8': 'RT Conventional Machine Verification',
  '1.2.840.10008.5.1.4.34.9': 'RT Ion Machine Verification',
  '1.2.840.10008.5.1.4.37.1': 'General Relevant Patient Information Query',
  '1.2.840.10008.5.1.4.37.2':
    'Breast Imaging Relevant Patient Information Query',
  '1.2.840.10008.5.1.4.37.3': 'Cardiac Relevant Patient Information Query',
  '1.2.840.10008.5.1.4.38.1': 'Hanging Protocol Storage',
  '1.2.840.10008.5.1.4.38.2': 'Hanging Protocol Information Model - FIND',
  '1.2.840.10008.5.1.4.38.3': 'Hanging Protocol Information Model - MOVE',
  '1.2.840.10008.5.1.4.38.4': 'Hanging Protocol Information Model - GET',
  '1.2.840.10008.5.1.4.39.1': 'Color Palette Storage',
  '1.2.840.10008.5.1.4.39.2': 'Color Palette Information Model - FIND',
  '1.2.840.10008.5.1.4.39.3': 'Color Palette Information Model - MOVE',
  '1.2.840.10008.5.1.4.39.4': 'Color Palette Information Model - GET',
  '1.2.840.10008.5.1.4.41': 'Product Characteristics Query SOP Class',
  '1.2.840.10008.5.1.4.42': 'Substance Approval Query SOP Class',
  '1.2.840.10008.5.1.4.43.1': 'Generic Implant Template Storage',
  '1.2.840.10008.5.1.4.43.2':
    'Generic Implant Template Information Model - FIND',
  '1.2.840.10008.5.1.4.43.3':
    'Generic Implant Template Information Model - MOVE',
  '1.2.840.10008.5.1.4.43.4':
    'Generic Implant Template Information Model - GET',
  '1.2.840.10008.5.1.4.44.1': 'Implant Assembly Template Storage',
  '1.2.840.10008.5.1.4.44.2':
    'Implant Assembly Template Information Model - FIND',
  '1.2.840.10008.5.1.4.44.3':
    'Implant Assembly Template Information Model - MOVE',
  '1.2.840.10008.5.1.4.44.4':
    'Implant Assembly Template Information Model - GET',
  '1.2.840.10008.5.1.4.45.1': 'Implant Template Group Storage',
  '1.2.840.10008.5.1.4.45.2': 'Implant Template Group Information Model - FIND',
  '1.2.840.10008.5.1.4.45.3': 'Implant Template Group Information Model - MOVE',
  '1.2.840.10008.5.1.4.45.4': 'Implant Template Group Information Model - GET',
  '1.2.840.10008.7.1.1': 'Native DICOM Model',
  '1.2.840.10008.7.1.2': 'Abstract Multi-Dimensional Image Model',
  '1.2.840.10008.8.1.1': 'DICOM Content Mapping Resource',
  '1.2.840.10008.15.0.3.1': 'dicomDeviceName',
  '1.2.840.10008.15.0.3.2': 'dicomDescription',
  '1.2.840.10008.15.0.3.3': 'dicomManufacturer',
  '1.2.840.10008.15.0.3.4': 'dicomManufacturerModelName',
  '1.2.840.10008.15.0.3.5': 'dicomSoftwareVersion',
  '1.2.840.10008.15.0.3.6': 'dicomVendorData',
  '1.2.840.10008.15.0.3.7': 'dicomAETitle',
  '1.2.840.10008.15.0.3.8': 'dicomNetworkConnectionReference',
  '1.2.840.10008.15.0.3.9': 'dicomApplicationCluster',
  '1.2.840.10008.15.0.3.10': 'dicomAssociationInitiator',
  '1.2.840.10008.15.0.3.11': 'dicomAssociationAcceptor',
  '1.2.840.10008.15.0.3.12': 'dicomHostname',
  '1.2.840.10008.15.0.3.13': 'dicomPort',
  '1.2.840.10008.15.0.3.14': 'dicomSOPClass',
  '1.2.840.10008.15.0.3.15': 'dicomTransferRole',
  '1.2.840.10008.15.0.3.16': 'dicomTransferSyntax',
  '1.2.840.10008.15.0.3.17': 'dicomPrimaryDeviceType',
  '1.2.840.10008.15.0.3.18': 'dicomRelatedDeviceReference',
  '1.2.840.10008.15.0.3.19': 'dicomPreferredCalledAETitle',
  '1.2.840.10008.15.0.3.20': 'dicomTLSCyphersuite',
  '1.2.840.10008.15.0.3.21': 'dicomAuthorizedNodeCertificateReference',
  '1.2.840.10008.15.0.3.22': 'dicomThisNodeCertificateReference',
  '1.2.840.10008.15.0.3.23': 'dicomInstalled',
  '1.2.840.10008.15.0.3.24': 'dicomStationName',
  '1.2.840.10008.15.0.3.25': 'dicomDeviceSerialNumber',
  '1.2.840.10008.15.0.3.26': 'dicomInstitutionName',
  '1.2.840.10008.15.0.3.27': 'dicomInstitutionAddress',
  '1.2.840.10008.15.0.3.28': 'dicomInstitutionDepartmentName',
  '1.2.840.10008.15.0.3.29': 'dicomIssuerOfPatientID',
  '1.2.840.10008.15.0.3.30': 'dicomPreferredCallingAETitle',
  '1.2.840.10008.15.0.3.31': 'dicomSupportedCharacterSet',
  '1.2.840.10008.15.0.4.1': 'dicomConfigurationRoot',
  '1.2.840.10008.15.0.4.2': 'dicomDevicesRoot',
  '1.2.840.10008.15.0.4.3': 'dicomUniqueAETitlesRegistryRoot',
  '1.2.840.10008.15.0.4.4': 'dicomDevice',
  '1.2.840.10008.15.0.4.5': 'dicomNetworkAE',
  '1.2.840.10008.15.0.4.6': 'dicomNetworkConnection',
  '1.2.840.10008.15.0.4.7': 'dicomUniqueAETitle',
  '1.2.840.10008.15.0.4.8': 'dicomTransferCapability',
  '1.2.840.10008.15.1.1': 'Universal Coordinated Time',
};
