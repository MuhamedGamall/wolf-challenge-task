"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Replace, ReplaceIcon, UploadIcon } from "lucide-react";
import { FileUploaderProps } from "@/types";

export const FileUploader = ({
  file,
  onChange,
  disabled,
  type,
  t,
}: FileUploaderProps) => {
  const isImage = type === "image";
  const isVideo = type === "video";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const file = files?.[0];

    if (type === "image" && !file?.type.startsWith("image"))
      return alert(t("alerts.failedToUpload", { fileType: type }));

    if (type === "video" && !file?.type.startsWith("video"))
      return alert(t("alerts.failedToUpload", { fileType: type }));

    if (files && files.length > 0) {
      if (files.length > 1) return;
      if (file) {
        const url = URL.createObjectURL(file);
        onChange(url);
      }
    }
  };
  const FileIcon = file ? ReplaceIcon : UploadIcon;
  return (
    <div
      className={cn("flex flex-col  max-w-[800px]", {
        "cursor-not-allowed": disabled,
      })}
    >
      <input
        id={type + "-file"}
        type="file"
        onChange={handleChange}
        disabled={disabled}
        className="hidden"
        accept={
          isImage
            ? "image/png, image/jpeg, image/svg+xml, image/webp, image/apng"
            : isVideo
            ? "video/mp4, video/ogg, video/webm, video/3gpp"
            : undefined
        }
      />
      {file && (
        <>
          {isImage && (
            <Image
              src={String(file)}
              alt="Uploaded file preview"
              width={300}
              height={300}
              loading="lazy"
              className="max-h-[300px]  rounded-md object-cover shadow-md "
            />
          )}
          {isVideo && (
            <iframe
              src={String(file)}
              className="h-[300px] rounded-md shadow-md "
              title="Uploaded video preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </>
      )}
      <label
        htmlFor={type + "-file"}
        className={cn(
          "bg-custom-accentDark  w-full shadow-md flex items-center justify-center flex-col text-center gap-2 rounded-md p-4",
          {
            "opacity-50": disabled,
            "cursor-not-allowed": disabled,
            "cursor-pointer": !disabled,
            "justify-between flex-row mt-1": file,
          }
        )}
      >
        <FileIcon className="h-6 w-6 text-custom-accent" />
        <div>
          {!file && (
            <p className="text-gray-400 font-medium">
              {t(`uploadBtn`, { fileType: type })}
            </p>
          )}
          <p className="text-[12px] text-gray-400">
            {isImage ? "SVG, PNG, JPG, APNG, WEBP" : "MP4, OGG, WEBM, 3GPP"}
          </p>
        </div>
      </label>
    </div>
  );
};
